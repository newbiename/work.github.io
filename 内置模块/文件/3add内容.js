var fs = require("fs");

fs.appendFile("./text.txt", "\n add two", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(1);
  }
});
