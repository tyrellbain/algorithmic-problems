const fs = require("fs");

fs.opendir(`./problems/`, {}, async (err, dir) => {
  let content =
    "# Algorithmic Problems\nA collection of algorithmic problems from leetcode\n## Quickstart\n1. Clone repo\n```sh\n$ git clone git@github.com:tyrellbain/algorithmic-problems.git\n```\n2. Install dependencies\n```sh\n$ npm install\n```\n3. Run algorithmic problem\nSelect problem # from the table of below\n```sh\n$ git run start PROBLEM-NUMBER\n```\n## Table of Contents";
  const regex = /^(\..+)/;
  for await (const dirent of dir) {
    if (dirent.name.match(regex) === null) {
      const splitName = dirent.name.split("-");
      const number = splitName.shift();
      const title = splitName
        .map((word) => {
          const wordArr = word.split("");
          wordArr[0] = word[0].toUpperCase();
          return wordArr.join("");
        })
        .join(" ");
      content += `\n * **${number}. ${title}**`;
    }
  }
  fs.writeFileSync("README.md", content);
});
