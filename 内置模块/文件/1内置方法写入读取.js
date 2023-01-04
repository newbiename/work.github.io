const fs = require("fs");

// node 推荐同步
// 如果创建的文件 已存在 会覆盖

//异步创建 异步才有回调 第一个默认错误选项
fs.writeFile("./text.txt", "this text", (err) => {
  if (err) {
    console.log(err);
  } else {
    // 创建成功返回
    console.log("yes");
  }
});


// 同步创建
// fs.writeFileSync("./test1.txt", "this test1");


// 异步读取
fs.readFile("text.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  // data 内置buffer对象  表示把 计算机的内存数据（2进制）
  // toString() 转为字符串
  console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync("text.txt");

console.log("同步读取: " + data.toString());



