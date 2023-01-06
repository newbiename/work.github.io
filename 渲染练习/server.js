const http = require("http");
const path = require("path");
const fs = require("fs");
let filePath = ``;

const server = http
  .createServer((req, res) => {
    if (req.url === `/favico.ico`) {
      return;
    }

    // 设置响应头
    res.writeHead(200, "ok", {
      //数据类型 格式
      "content-type": "text/html;charset=utf-8",
    });

    //  写入数据
    let pa = req.url;

    switch (pa) {
      case "/":
        filePath = "index.html";
        break;
      case "/login":
        filePath = "login.html";
        break;
      case "/regist":
        filePath = "regist.html";
        break;

      default:
        break;
    }
    // console.log(filePath);
    fs.readFile(path.join(__dirname, filePath), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  })
  .listen(8060, () => {
    console.log("Server running at \n http://localhost:8060/");
  });
