const updateOS = require('./updateOS');
const aptCleanup = require('./aptCleanup');
const log = require('../../lib/log');


module.exports.ubuntu20 = async (ssh, server) => {
    const functions = server.subscribedFunctions;
    for (const functionName of functions) {
        switch(functionName) {
            case 'updateOS':
                log.log('Updating - ubuntu20', 'debug');
                await updateOS.updateOS(ssh);
                break;
            case 'aptCleanup':
                log.log('aptCleanup - ubuntu20', 'debug');
                await aptCleanup.aptCleanup(ssh);
                break;
            default:
                log.log("Error: Unknown function: " + functionName,'error');
                break;

        }
    }

}