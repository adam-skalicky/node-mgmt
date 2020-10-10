const log = require('../../lib/log');

module.exports.aptCleanup = async (ssh) => {
    const serverName = ssh.connection.config.host;
    log.serverOutput('-Running: ' + 'apt autoremove -y', serverName)
    await ssh.execCommand('apt autoremove -y').then((res) => (log.serverOutput(res.stdout, serverName)))
}