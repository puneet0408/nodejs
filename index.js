//import {GFnameFun} from "./feature.js"
import 'dotenv/config'
import express from "express";

import path from "path";
import morgan from "morgan";
import mongoose from 'mongoose';

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
import ProductRouter from "./routes/product.js"
import UserRouter from "./routes/users.js"

// mongoose.connect(process.env.MONGO_CLUSTER).then(res => console.log("Database Connected")).
//   catch(err => console.log(err));


//------------- middelware
// ---------------bodyParser
// express.json is middleware to bodyParser measns to understand the body
server.use(express.json());
server.use(morgan("dev"));
server.use(express.static(process.env.PUBLIC_DIR));
// MVC Model view container 
server.use('/products' ,ProductRouter);
server.use('/user' ,UserRouter);
console.log("env",process.env.DB_PSSWORD);
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
 


const pathLocation = path.resolve();

server.get("/demo", (req, res) => {
  //res.send('hello')
  //res.sendFile(path.join(pathLocation ,"./index.html"))
  res.json(productDummy);
  // res.sendStatus(404)
});

server.listen(process.env.PORT, () => {
  console.log("server is working");
});
