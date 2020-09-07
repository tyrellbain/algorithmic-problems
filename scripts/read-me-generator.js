const fs = require("fs");

fs.opendir(`./problems/`, {}, async (err, dir) => {
  let content =
    "# Algorithmic Problems\nA collection of algorithmic problems from leetcode\n## Quickstart\n1. Clone repo\n```sh\n$ git clone git@github.com:tyrellbain/algorithmic-problems.git\n```\n2. Install dependencies\n```sh\n$ npm install\n```\n3. Run algorithmic problem\nSelect problem # from the table of below\n```sh\n$ git run start PROBLEM-NUMBER\n";
  const regex = /^(\..+)/;
  for await (const dirent of dir) {
    console.log(dirent.name.match(regex) === null);
    if (dirent.name.match(regex) === null) {
      const number = dirent.name.split("-")[0];
      content += `\n ## ${number}`;
    }
  }
  fs.writeFileSync("README.md", content);
});
