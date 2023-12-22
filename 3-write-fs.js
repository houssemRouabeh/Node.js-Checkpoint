const { error } = require("console");
const fs = require("fs");
const fileName = "welcome.txt";
const content = "Hello Node";

fs.writeFile(fileName, content, (error) => {
  if (error) {
    console.log("Creating file error", error);
  } else {
    console.log(`The ${fileName} has been created successfully`);
  }
});
