var fs = require("fs");

// 查询文件是否存在
// access 入口 取得
fs.access("./text.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(1);
  }
});
