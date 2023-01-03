// commonjs 代码规定
console.log(1);

// const a = require("./module引用.js"); //普通
// import a from "./module1.js"; // ES6 在node 不通用

// console.log(a.f1.name); //zs

// const { numb,f1 } = a; // 结构赋值
// console.log(f1.name); // zs
// console.log(numb); // 100


const b = require("./m.json");  
console.log(b);




//  require("./m.json");    
//  遇见 (   ./ ../   /   )
//  先判定为自己封装模块 
//  js  json node  根据尾缀类型 来解析执行

