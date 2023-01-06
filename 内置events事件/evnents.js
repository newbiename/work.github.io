// 事件驱动
// 监听事件状态变化 做出响应

let events = require("events");
const evem = new events.EventEmitter();

// 监听事件
evem.on("abc", () => {
  console.log(1);
});

//触发事件
evem.emit("abc");  // emit 发出

