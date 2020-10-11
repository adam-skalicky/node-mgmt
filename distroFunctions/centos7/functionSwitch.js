const updateOS = require('./updateOS');
const updatePBX = require('./updatePBX');
const sshCopy = require('../common/sshCopy');
const echo = require('../common/echo');
const log = require('../../lib/log');


module.exports.centos7 = async (ssh, server) => {
    const functions = server.subscribedFunctions;
    for (const functionName of functions) {
        log.log('Evaluating function ' + functions, 'debug');
        switch(functionName) {
            case 'updateOS':
                log.log('Updating - centos7', 'debug');
                await updateOS.updateOS(ssh);
                break;
            case 'sshCopy':
                log.log('sshCopy - centos7', 'debug');
                await sshCopy.sshCopy(ssh);
                break;
            case 'updatePBX':
                log.log('Updating - centos7 -- PBX', 'debug');
                await updatePBX.updatePBX(ssh);
                break;
            case 'echoHello':
                log.log('echoHello - centos7', 'debug');
                await echo.echoHello(ssh);
                break;
            default:
                log.log("Error: Unknown function: " + functionName,'error');
                break;

        }
    }

}