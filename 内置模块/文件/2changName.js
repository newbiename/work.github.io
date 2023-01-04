const fs = require("fs");
fs.rename("./test1.txt", "input.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(1);
  }
});
