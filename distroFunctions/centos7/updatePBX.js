const log = require('../../lib/log');

module.exports.updatePBX = async (ssh) => {
    const serverName = ssh.connection.config.host;
    await ssh.execCommand('fwconsole ma updateall').then((res) => (log.serverOutput(res.stdout, serverName)))
    await ssh.execCommand('fwconsole chown').then((res) => (log.serverOutput(res.stdout, serverName)))
    await ssh.execCommand('fwconsole reload').then((res) => (log.serverOutput(res.stdout, serverName)))
}