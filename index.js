const fs = require("fs");
const { exec } = require("child_process");
const chalk = require("chalk");
const question = process.argv.slice(2)[0];
const NS_PER_MS = 1e6;

fs.opendir(`./questions/`, {}, async (err, dir) => {
  let questionExists = false;
  for await (const dirent of dir) {
    if (dirent.name.split("-")[0] === question) {
      questionExists = true;
      const start = process.hrtime.bigint();
      exec(`node ./questions/${dirent.name}/index.js`);
      const end = process.hrtime.bigint();
      const diff = end - start;
      console.log(
        chalk.bold.underline(`${dirent.name.split("-").join(" ")}\n`)
      );
      console.log(chalk.cyan.underline("Runtime\n"));
      console.log(
        `Function took ${
          Math.round((parseInt(diff) / NS_PER_MS) * 10) / 10
        }ms to run`
      );
      console.log(chalk.cyan.underline("\nTest Results"));
      exec(`mocha questions/${dirent.name}/test.js`, (err, stdout, stderr) => {
        console.log(stdout);
      });
    }
  }
  if (!questionExists) {
    console.log(`Question ${question} wasn't found`);
  }
});
