const log = require('../../lib/log');


module.exports.echoHello = async (ssh) => {
    const serverName = ssh.connection.config.host;
    console.log(serverName)
    log.serverOutput('-Running: ' + 'echo "hello"', serverName)
    await ssh.execCommand('echo "hello"').then((res) => (log.serverOutput(res.stdout, serverName)))
}