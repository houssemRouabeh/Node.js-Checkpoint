const fs = require("fs");
const fileName = "welcome.txt";

fs.readFile(fileName, (error, data) => {
  if (error) {
    return console.log("Reading file error :", error);
  } else {
    console.log(`The ${fileName} content `, data.toString());
  }
});
