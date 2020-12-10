const log = require('../../lib/log');

module.exports.updateOS = async (ssh) => {
    const serverName = ssh.connection.config.host;
    log.serverOutput('-Running: ' + 'apt-get update', serverName)
    await ssh.execCommand('apt-get update').then((res) => (log.serverOutput(res.stdout, serverName)))
    log.serverOutput('-Running: ' + 'apt-get upgrade -y', serverName)
    await ssh.execCommand('apt-get upgrade -y').then((res) => (log.serverOutput(res.stdout,serverName)))
    log.serverOutput('-Running: ' + 'apt-get dist-upgrade -y', serverName)
    await ssh.execCommand('apt-get dist-upgrade -y').then((res) => (log.serverOutput(res.stdout, serverName)))
    log.serverOutput('-Running: ' + 'snap refresh ', serverName)
    await ssh.execCommand('snap refresh').then((res) => (log.serverOutput(res.stdout, serverName)))
}