const http = require("http");
const obj = { a: 1 };
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return;
  }
  const url = new URL(req.url, "http://localhost:8070");
  console.log(url.searchParams.get("key"));

  const fname = url.searchParams.get("key");

  res.write(`${fname}(123)`);
  res.end();
});

server.listen(8070, () => {
  console.log("Server is running.");
});
