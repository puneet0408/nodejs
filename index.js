//import {GFnameFun} from "./feature.js"
import "dotenv/config";
import express from "express";

import path from "path";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

//const t1 = performance.now();
//const index = fs.readFileSync("./index.html", "utf-8"); // read file sycronously

//     fs.readFile("./index.html",'utf-8',(err , txt)=>{
//  console.log(txt);
//    })   // read fle asyronously
//console.log(home);
// console.log(GFnameFun());
// const t2 = performance.now();
// console.log(t1 - t2);
//-------------------- express
const server = express();
import ProductRouter from "./routes/product.js";
import UserRouter from "./routes/users.js";

 

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_CLUSTER);
  console.log("databaseconnected");
}
//------------- middelware
// ---------------bodyParser
// express.json is middleware to bodyParser measns to understand the body

const pathLocation = path.resolve();
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use(express.static(path.join(pathLocation, process.env.PUBLIC_DIR)));
// MVC Model view container
server.use("/products", ProductRouter);
server.use("/user", UserRouter);
server.use("*", (req, res) => {
  res.sendFile(path.join(pathLocation, "dist", "index.html"));
});

// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("user-Agent")
//   );
//   next();
// });

// our server can't read body data  directly but we need to send  this to server  securly (...) that's why we use a middleware calls experss.json for read data of request  (understand  body data of request). but express.json only read Json type data.

// const auth = (req, res, next) => {
//   // if (req.body.password === "123") {
//   //   next();
//   // } else {
//   //   res.sendStatus(401);
//   // }

//   next()
// };

server.get("/demo", (req, res) => {
  //res.send('hello')
  //res.sendFile(path.join(pathLocation ,"./index.html"))
  res.json(productDummy);
  // res.sendStatus(404)
});

server.listen(process.env.PORT, () => {
  console.log("server is working");
});
