const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const processError = (stderr) => stderr.toString().replace('-  Building for production...\n', '');

export const jestExec = async (command, options, callback, done) => {
    try {
        const { stderr } = await exec(command, options);

        if (processError(stderr)) {
            done.fail(stderr);
        }
    } catch (e) {
        done.fail(processError(e));
    }

    if (callback) {
        callback();
    }

    done();
};
