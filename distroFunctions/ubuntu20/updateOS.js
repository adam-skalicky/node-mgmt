const log = require('../../lib/log');

module.exports.updateOS = async (ssh) => {
    const serverName = ssh.connection.config.host;
    await ssh.execCommand('apt-get update').then((res) => (log.serverOutput(res.stdout, serverName)))
    //await ssh.execCommand('apt-get upgrade -y').then((res) => (log.serverOutput(res.stdout,serverName)))
    //await ssh.execCommand('apt-get dist-upgrade -y').then((res) => (log.serverOutput(res.stdout), serverName))
}