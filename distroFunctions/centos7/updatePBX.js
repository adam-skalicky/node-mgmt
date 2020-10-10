const log = require('../../lib/log');

module.exports.updatePBX = async (ssh) => {
    const serverName = ssh.connection.config.host;
    log.serverOutput('-Running: ' + 'fwconsole ma updateall', serverName)
    await ssh.execCommand('fwconsole ma updateall').then((res) => (log.serverOutput(res.stdout, serverName)))
    log.serverOutput('-Running: ' + 'fwconsole chown', serverName)
    await ssh.execCommand('fwconsole chown').then((res) => (log.serverOutput(res.stdout, serverName)))
    log.serverOutput('-Running: ' + 'fwconsole reload', serverName)
    await ssh.execCommand('fwconsole reload').then((res) => (log.serverOutput(res.stdout, serverName)))
}