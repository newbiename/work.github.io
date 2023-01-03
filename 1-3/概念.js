console.log(123);
// console.log(global); // = window
console.log(this); //无

new Promise((resole, reject) => {
  resole();
}).then();
