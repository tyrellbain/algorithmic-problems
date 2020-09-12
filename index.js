const fs = require("fs");
const { exec } = require("child_process");
const chalk = require("chalk");
const { stdout } = require("process");
const question = process.argv.slice(2)[0];
const NS_PER_MS = 1e6;

fs.opendir(`./problems/`, {}, async (err, dir) => {
  let questionExists = false;
  for await (const dirent of dir) {
    if (dirent.name.split("-")[0] === question) {
      questionExists = true;
      const start = process.hrtime.bigint();
      exec(`node ./problems/${dirent.name}/index.js`, (err, stdout, stderr) => {
        if (stdout) {
          console.log(chalk.bgGreen.white("\n### Function console log ###\n"));
          console.log(stdout);
        }
        if (err) {
          console.log(chalk.bgRed.white("\n### Function errors ###\n"));
          console.log(err);
        }
      });
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
      exec(`mocha problems/${dirent.name}/test.js`, (err, stdout, stderr) => {
        console.log(stdout);
      });
    }
  }
  if (!questionExists) {
    console.log(`Question ${question} wasn't found`);
  }
});
