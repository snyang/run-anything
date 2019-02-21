const path = require('path');

var config = {
  // This application properties for operating
  "sshConfig": {
    "host": "9.110.179.196",
    "port": "24022",
    "username": "opuser",
    "password": "passw0rd",
    "readyTimeout": 30000
  },
  "source": {
    "src_dir": "src",
    "log_dir": "logs",
    "startServer_dir": path.join(__dirname, "..", "server", "StartServer.js"),
    "startServer_name": "StartServer.ts",
    "package_json_dir": "package.json",
  },
  "remote": {
    "app_root_dir": "/home/opuser/.run-anything"
  }
}

module.exports = config;