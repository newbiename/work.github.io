var path = require("path");
// console.log("文件夹绝对：" + __dirname);
// console.log("文件绝对：" + __filename);

// const fil = path.parse(__filename);
// console.log(fil);
// dir   文件夹
// base  带后缀资源   （底部 基础）
// ext   后缀        （号码 扩展）
// name  不带后缀

// const wjName = path.basename("../文件/1内置方法写入读取.js");
// console.log("基础名字：" + wjName);
// console.log('文件夹：'+path.dirname("../文件/1内置方法写入读取.js"));
// console.log(path.extname("../文件/1内置方法写入读取.js"));

// console.log(path.sep); // \ 分割符号

// console.log(path.join(__dirname, "./path.js")); // 拼接为绝对路径

// 相对路径转为绝对
// console.log(path.resolve("./path.js"))

// 判断是否是绝对路径

console.log(path.isAbsolute("./path.js"));//false

