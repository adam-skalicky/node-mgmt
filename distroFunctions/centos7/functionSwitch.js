const updateOS = require('./updateOS');
const updatePBX = require('./updatePBX');
const log = require('../../lib/log');


module.exports.centos7 = async (ssh, server) => {
    const functions = server.subscribedFunctions;
    for (const functionName of functions) {
        switch(functionName) {
            case 'updateOS':
                log.log('Updating - centos7', 'debug');
                await updateOS.updateOS(ssh);
                break;
            case 'updatePBX':
                log.log('Updating - centos7 -- PBX', 'debug');
                await updatePBX.updatePBX(ssh);
                break;
            default:
                log.log("Error: Unknown function: " + functionName,'error');
                break;

        }
    }

}