let http = require("http");

// let server = http.createServer((req, res) => {
//   res.end("Hello World!");
// });
// server.listen(8080, () => {
//   console.log("Server running at http://localhost:8080/");
// });

let server = http.createServer((req, res) => {
  console.log('ur'+req.url);
  console.log('me'+req.method);
  res.end("Hello World!");
});

server.listen(8080, () => {
  console.log("Server running at \n http://localhost:8080/");
});
