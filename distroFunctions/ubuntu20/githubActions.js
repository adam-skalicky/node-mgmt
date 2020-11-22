const log = require('../../lib/log');
const config = require('../../config.json');
const currentVersion = "2.274.2"
const repoURL = config.githubConfig.repoURL;
const token = config.githubConfig.token;

module.exports.configureAgent = async (ssh) => {
    const serverName = ssh.connection.config.host;

    log.serverOutput('-Running: ' + 'cd ~/ && mkdir actions-runner && cd actions-runner', serverName)
    await ssh.execCommand('cd ~/ && mkdir actions-runner').then((res) => (log.serverOutput(res.stdout,serverName)))

    log.serverOutput('-Running: ' + 'cd ~/actions-runner && curl -O -L https://github.com/actions/runner/releases/download/v' + currentVersion + '/actions-runner-linux-x64-' + currentVersion + '.tar.gz', serverName)
    await ssh.execCommand('cd ~/actions-runner && curl -O -L https://github.com/actions/runner/releases/download/v' + currentVersion + '/actions-runner-linux-x64-' + currentVersion + '.tar.gz').then((res) => (log.serverOutput(res.stdout, serverName)))

    log.serverOutput('-Running: ' + 'cd ~/actions-runner && tar xzf ./actions-runner-linux-x64-' + currentVersion + '.tar.gz', serverName)
    await ssh.execCommand('cd ~/actions-runner && tar xzf ./actions-runner-linux-x64-' + currentVersion + '.tar.gz').then((res) => (log.serverOutput(res.stdout, serverName)))

    log.serverOutput('-Running: ' + 'cd ~/actions-runner && ./config.sh --url ' + repoURL +  '--token ' + token, serverName)
    await ssh.execCommand('cd ~/actions-runner && ./config.sh --url ' + repoURL +  '--token ' + token).then((res) => (log.serverOutput(res.stdout, serverName)))

    log.serverOutput('-Running: ' + 'cd ~/actions-runner && ./config.sh --url ' + repoURL +  '--token ' + token, serverName)
    await ssh.execCommand('cd ~/actions-runner && ./config.sh --url ' + repoURL +  '--token ' + token).then((res) => (log.serverOutput(res.stdout, serverName)))

    log.serverOutput('-Running: ' + 'rm ~/actions-runner/actions-runner-linux-x64-' + currentVersion + '.tar.gz', serverName)
    await ssh.execCommand('rm ~/actions-runner/actions-runner-linux-x64-' + currentVersion + '.tar.gz').then((res) => (log.serverOutput(res.stdout, serverName)))
}