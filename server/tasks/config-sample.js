const path = require('path');

var config = {
  // This application properties for operating
  "sshConfig": {
    "host": "<server name>",
    "port": "22",
    "username": "user",
    "password": "password",
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
    "app_root_dir": "/home/user/.run-anything"
  }
}

module.exports = config;