const log = require('../../lib/log');

module.exports.updateOS = async (ssh) => {
    const serverName = ssh.connection.config.host;
    await ssh.execCommand('yum update -y').then((res) => (log.serverOutput(res.stdout, serverName)))
}