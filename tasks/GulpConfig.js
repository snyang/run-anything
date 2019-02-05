const path = require('path');

var config = {
  // This application properties for operating
  "sshConfig": {
    "host": "localhost",
    "port": "22",
    "username": "steven",
    "password": "passw0rd",
    "readyTimeout": 30000
  },
  "source": {
    "build_dir": "build",
    "log_dir": "logs",
    "startServer_dir": path.join(__dirname, "..", "server", "StartServer.js"),
    "startServer_name": "StartServer.js",
    "package_json_dir": "package.json",
  },
  "remote": {
    "app_root_dir": "/home/steven/.run-anything"
  }
}

module.exports = config;