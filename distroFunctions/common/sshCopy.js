const fs = require('fs');
const log = require('../../lib/log');


module.exports.sshCopy = async (ssh) => {
    const serverName = ssh.connection.config.host;
    log.serverOutput('-Running: ' + 'sshCopy', serverName)
    const pubKey = await fs.readFileSync('./id_rsa.pub', "utf8");
    log.serverOutput('-Running: ' + 'echo "hello"', serverName)
    let existingAuthorizedKeys
    await ssh.execCommand('cat ~/.ssh/authorized_keys').then((res) => (
        log.serverOutput(res.stdout, serverName),
        existingAuthorizedKeys = res.stdout
        ))
    let authorizedKeyPresent = existingAuthorizedKeys.includes(pubKey)
    if ( authorizedKeyPresent === false){
        log.log('Adding authorized key.', 'debug')



        log.serverOutput('-Running: ' + 'mkdir -p ~/.ssh/', serverName),
        await ssh.execCommand('mkdir -p ~/.ssh/').then((res) => (log.serverOutput(res.stdout, serverName)))

        log.serverOutput('-Running: ' + 'echo "' + pubKey + '"' + '> ~/.ssh/authorized_keys', serverName),
        await ssh.execCommand('echo "' + pubKey + '"' + '> ~/.ssh/authorized_keys').then((res) => (log.serverOutput(res.stdout, serverName)))

        log.serverOutput('-Running: ' + 'chown -R root:root /root && chmod 700 /root && chmod 700 /root/.ssh && chmod 600 /root/.ssh/authorized_keys', serverName),
        await ssh.execCommand('chown root:root /root && chmod 700 /root && chmod 700 /root/.ssh && chmod 600 /root/.ssh/authorized_keys').then((res) => (log.serverOutput(res.stdout, serverName)))
    }
    
}