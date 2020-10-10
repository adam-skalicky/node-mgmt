const {NodeSSH} = require('node-ssh');

const log = require('./lib/log');
const ubuntu20 = require('./distroFunctions/ubuntu20/functionSwitch');
const centos7 = require('./distroFunctions/centos7/functionSwitch');
const servers = require('./config.json');


servers.servers.forEach(async server => {
  log.log('Connecting to: ' + server.hostname, 'info');
  const ssh = new NodeSSH();
  await ssh.connect({
    host: server.hostname,
    username: server.username,
    privateKey: './id_rsa'
  });
  try {
    switch (server.type) {
      case 'ubuntu20':
        await ubuntu20.ubuntu20(ssh,server);
        break;
      case 'centos7':
        await centos7.centos7(ssh,server);
        break;
      default:
        log.log('error, no matching OS handler', 'error');
        break;
    }
  }
  catch (err) {
    log.log(err,'error');
  }
  finally{
    ssh.dispose();
    log.log('Disconnected from host: ' + server.hostname, 'info');
  }
})
