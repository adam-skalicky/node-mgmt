const fs = require('fs');
const config = require('../config.json');


module.exports.log = async (message, logType) => {
    const logLevel = config.logLevel;
    let logMessage = false;

    switch (logLevel) {
        case 'debug':
            logMessage = true
            break;
        case 'info':
            if (logType !== 'debug') {
                logMessage = true;
            }
            break;
        case 'warn':
            if (logType !== 'debug' && logType !== 'info') {
                logMessage = true;
            };
            break;
        case 'error':
            if (logType === 'error'){
                logMessage = true;
            };
            break;
        default:
            console.log('Invalid log type described.')
    }
    
    if (logMessage === true) {
        try {
        const logTypeFormatted = logType.toUpperCase();
        const logOutputPath = './log.txt';
        fs.appendFileSync(logOutputPath, logTypeFormatted + ": " + message, 'utf8')
        fs.appendFileSync(logOutputPath, '\n', 'utf8')
        } catch (err) {
            console.log('error - logging _ serverOutput')
            console.log(err)
        }
    }
}

module.exports.serverOutput = async (message, serverName) => {
    const serverAuditLog = config.serverAuditLog;
    if (serverAuditLog === true) {
        try{
        let date = Date()
        const serverOutputPath = './serverAuditLog.txt'
        const serverNameFormatted = serverName.toUpperCase();
        fs.appendFileSync(serverOutputPath, '\n', 'utf8')
        fs.appendFileSync(serverOutputPath, date, 'utf8')
        fs.appendFileSync(serverOutputPath, '\n', 'utf8')
        fs.appendFileSync(serverOutputPath, '\n', 'utf8')
        fs.appendFileSync(serverOutputPath, '===============' + serverNameFormatted + '===============', 'utf8')
        fs.appendFileSync(serverOutputPath, '\n', 'utf8')
        fs.appendFileSync(serverOutputPath, message, 'utf8')
        fs.appendFileSync(serverOutputPath, '\n', 'utf8')
        } catch (err){
            console.log('error - logging _ serverOutput')
            console.log(err)
        }
    }
}