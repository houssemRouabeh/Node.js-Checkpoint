const generator = require("generate-password");

const passwordGenerator = (
  length,
  containNumbers,
  containUppercase,
  containLowercase,
  containSymbols
) => {
  const password = generator.generate({
    length: length,
    numbers: containNumbers,
    symbols: containSymbols,
    uppercase: containUppercase,
    lowercase: containLowercase,
  });
  console.log(password);
};
//Password generated example
passwordGenerator(12, true, true, true, false);
