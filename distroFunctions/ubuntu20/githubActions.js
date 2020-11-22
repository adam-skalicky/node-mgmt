const log = require('../../lib/log');
const config = require('../../config.json');
const currentVersion = "2.274.2"
const repoURL = config.githubConfig.repoURL;
const token = config.githubConfig.token;

module.exports.configureAgent = async (ssh) => {
    const serverName = ssh.connection.config.host;
    log.serverOutput('-Running: ' + 'cd ~/', serverName)
    await ssh.execCommand('cd ~/').then((res) => (log.serverOutput(res.stdout, serverName)))
    log.serverOutput('-Running: ' + 'mkdir actions-runner && cd actions-runner', serverName)
    await ssh.execCommand('mkdir actions-runner && cd actions-runner').then((res) => (log.serverOutput(res.stdout,serverName)))
    log.serverOutput('-Running: ' + 'curl -O -L https://github.com/actions/runner/releases/download/v' + currentVersion + '/actions-runner-linux-x64-' + currentVersion + '.tar.gz', serverName)
    await ssh.execCommand('curl -O -L https://github.com/actions/runner/releases/download/v' + currentVersion + '/actions-runner-linux-x64-' + currentVersion + '.tar.gz').then((res) => (log.serverOutput(res.stdout, serverName)))
    log.serverOutput('-Running: ' + 'tar xzf ./actions-runner-linux-x64-' + currentVersion + '.tar.gz', serverName)
    await ssh.execCommand('tar xzf ./actions-runner-linux-x64-' + currentVersion + '.tar.gz').then((res) => (log.serverOutput(res.stdout, serverName)))
    log.serverOutput('-Running: ' + 'tar xzf ./actions-runner-linux-x64-' + currentVersion + '.tar.gz', serverName)
    await ssh.execCommand('tar xzf ./actions-runner-linux-x64-' + currentVersion + '.tar.gz').then((res) => (log.serverOutput(res.stdout, serverName)))
    log.serverOutput('-Running: ' + './config.sh --url ' + repoURL +  '--token ' + token, serverName)
    await ssh.execCommand('tar xzf ./actions-runner-linux-x64-' + currentVersion + '.tar.gz').then((res) => (log.serverOutput(res.stdout, serverName)))
}