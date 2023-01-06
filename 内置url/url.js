const url = require("url");
let str =
  "https://www.baidu.com/s?wd=%E4%B9%A0%E8%BF%91%E5%B9%B3%E5%90%8C%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%80%BB%E7%BB%9F%E4%BC%9A%E8%B0%88&sa=fyb_n_homepage&rsv_dl=fyb_n_homepage&from=super&cl=3&tn=baidutop10&fr=top1000&rsv_idx=2&hisfilter=1";
// decodeURI 解码
// decodeURIComponent  解码

// console.log(decodeURI(str));
// console.log(decodeURIComponent(str));

let strr = decodeURI(str);
// parse 解析 一般用于表达语法的解析
// const uobj = url.parse(strr);
// console.log(uobj);
// console.log(uobj.host);
// protocol   协议            http https ftp

// slashes   （计算机）
// auth       认证

// host       主机 （主人）    www.baidu.com:443 默认
// port       端口 （港口）    :443 默认
// search     查询参数 （搜索） ？开始查询

// query      问题

// pathname   路径名          api/www/s  从上至下逐步查询

// href       完整地址

// hash       指示参数        # 开始结束指示

// origin     协议 +  主机名  + 端口号

// ========================================

//推荐使用 URL 代替 decodeURI(str);
const nur = new URL(str);
// console.log(nur);
console.log(nur.searchParams); //map数据类型 ES6

console.log(
  nur.searchParams.forEach((v, k) => {
    console.log(k, v);
  })
); // 可遍历

