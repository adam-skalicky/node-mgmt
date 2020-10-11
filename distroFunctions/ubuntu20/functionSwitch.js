const updateOS = require('./updateOS');
const aptCleanup = require('./aptCleanup');
const sshCopy = require('../common/sshCopy');
const echo = require('../common/echo');
const log = require('../../lib/log');


module.exports.ubuntu20 = async (ssh, server) => {
    const functions = server.subscribedFunctions;
    for (const functionName of functions) {
        switch(functionName) {
            case 'updateOS':
                log.log('updateOS - ubuntu20', 'debug');
                await updateOS.updateOS(ssh);
                break;
            case 'aptCleanup':
                log.log('aptCleanup - ubuntu20', 'debug');
                await aptCleanup.aptCleanup(ssh);
                break;
            case 'sshCopy':
                log.log('sshCopy - ubuntu20', 'debug');
                await sshCopy.sshCopy(ssh);
                break;
            case 'echoHello':
                log.log('echoHello - ubuntu20', 'debug');
                await echo.echoHello(ssh);
                break;
            default:
                log.log("Error: Unknown function: " + functionName,'error');
                break;

        }
    }

}