const path = require("path");
const { exec } = require("child_process");

const scriptDir = __dirname;

const script = `
    git add . &&
    git commit -m "Auto commit" &&
    git push
`;

function autoCommit() {
  console.log("running auto commit...");
  exec(script, { cwd: scriptDir }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Stdout: ${stdout}`);
  });
  console.log("auto commit done. waiting for next commit...");
}

setInterval(autoCommit, 3600000);
