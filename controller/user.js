
import fs from "fs";
const Data = JSON.parse(fs.readFileSync("dummy.json", "utf-8")); // read file sycronously
const users = Data.users;

export const CreateProduct = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.status(201).json(req.body);
};

export const GetAllProduct = (req, res) => {
  res.json(users);
};

export const GetProduct = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  res.json(user);
};

export const ReplaceProduct = (req, res) => {
  const id = +req.params.id;
  const userindex = users.findIndex((p) => p.id === id);
  users.splice(userindex, 1, { ...req.body, id: id });
  res.status(201).json();
};

export const UpdateProduct = (req, res) => {
  const id = +req.params.id;
  const userindex = users.findIndex((p) => p.id === id);
  const user = users[userindex];
  users.splice(userindex, 1, { ...user, ...req.body });
  res.status(201).json();
};

export const DeleteProduct = (req, res) => {
  const id = +req.params.id;
  const userindex = users.findIndex((p) => p.id === id);
  const user = users[userindex];
  users.splice(userindex, 1);
  res.status(201).json(user);
};
