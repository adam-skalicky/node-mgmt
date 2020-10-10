const log = require('../../lib/log');

module.exports.aptCleanup = async (ssh) => {
    const serverName = ssh.connection.config.host;
    await ssh.execCommand('apt autoremove -y').then((res) => (log.serverOutput(res.stdout, serverName)))
}