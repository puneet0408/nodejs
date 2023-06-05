//  // create a server

// import http from "http";

// const data = { age: 5 };
// const server = http.createServer((req, res) => {
//   console.log("server started");
//   console.log(req.url);
//   if (req.url === "/") {
//     res.setHeader("Content-type", "text/html");
//     res.end(home);
//   } else if (req.url.startsWith("/products")) {
//     console.log(req.url);
//     const id = req.url.split("/")[2];
//     const product = productDummy.find((p) => p.id === +id);
//     res.setHeader("Content-type", "text/html");
//     let modifiedIndex = index.replace("**home**", product.title);
//     res.end(modifiedIndex);
//   } else if (req.url === "/api") {
//     res.setHeader("Content-type", "application/json");
//     res.end(JSON.stringify(Data));
//   } else {
//     res.writeHead(404);
//     res.end();
//   }
// });
// server.listen(8000);