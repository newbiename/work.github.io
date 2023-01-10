const http = require("http");
const server = http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html;charse=UTF-8",
      "access-control-allow-origin": "*",
    });
    res.write("<html><h1>HH</h1></html>");
    res.end("Hello World!");
  })
  .listen(8060, () => {
    console.log(`server running on
     port http:/localhost:8060`);
  });
