const { exec } = require('child_process');

const setupNeededModules = new Promise((resolve, reject) => {
    exec('sh node_modules/@project-gigs/service-ci-cd-template/scripts/setup-needed-modules.sh', (err, stdout, _) => {
        if (err) {
            console.error(`exec error: ${err}`);
            reject(err);
            return;
        } else {
            resolve(stdout);
        }
    });
})

const setupCommitHook = new Promise((resolve, reject) => {
    exec('sh node_modules/@project-gigs/service-ci-cd-template/scripts/setup-commit-hook.sh', (err, stdout, _) => {
        if (err) {
            console.error(`exec error: ${err}`);
            reject(err);
            return;
        } else {
            resolve(stdout);
        }
    });
})

const setup = async () => {
    await setupNeededModules
    await setupCommitHook
}

module.exports = { setup };