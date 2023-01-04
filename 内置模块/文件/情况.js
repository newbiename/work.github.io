var fs = require("fs");
// state 情况
fs.stat("./text.txt", (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    stats.isFile()? console.log("It is a file.") : console.log("It is a directory.");
    // a file 

    stats.isDirectory()? console.log("It is a directory.") : console.log("It is a file.");
    // a file

    stats.isBlockDevice()? console.log("It is a block device.") : console.log("It is a file.");
    // a file

  }
});
