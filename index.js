const { exec } = require('child_process');
const setup = async () => {
    await exec('sh ./scripts/setup-commit-hook.sh', (err, stdout, stderr) => {
        if (err) {
        console.error(`exec error: ${err}`);
        return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

module.exports = setup;