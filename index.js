const { exec } = require('child_process');
const setup = async () => {
    await exec('sh node_modules/@project-gigs/service-ci-cd-template/scripts/setup-needed-modules.sh', (err, stdout, stderr) => {
        if (err) {
        console.error(`exec error: ${err}`);
        return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
    await exec('sh node_modules/@project-gigs/service-ci-cd-template/scripts/setup-commit-hook.sh', (err, stdout, stderr) => {
        if (err) {
        console.error(`exec error: ${err}`);
        return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

module.exports = setup;