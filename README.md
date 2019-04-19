# run-anything
Run Any Thing from Any Where

## How to setup
The product is in developing...

- Download the project

### Host Application
You have to run the server application as a host.
The host application is used to save connection information to all servers.

```sh
cd server
yarn start
```

### Server Application
- (server) Prerequisites
  node v11.14.0+

```sh
# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

# would need to re-login

# get latest nodejs version
nvm ls-remote | tail -1

# install the latest nodejs version
nvm install v11.14.0
```

[nvm install-script](https://github.com/creationix/nvm#install-script)
[install nodejs](https://nodejs.org/en/download/package-manager/)

- (local) Configure a server deployment information
  Edit server/task/GulpConifg.js
  
- (local) Deploy the application to the server

```sh
cd server
yarn gulp deploy
```

- (server) Install database packages for need

```sh
cd ~/.run-anything
npm install

# optional: for oracle database
npm install oracledb --save

# follow instructions in https://oracle.github.io/odpi/doc/installation.html#linux

npm run start
```

- (local) Start the server

```sh
yarn gulp start-server
```

### Optional: test data
- Re-generate test data
  "server/test/data/sqlite.db"

```sh
cd server
yarn test-data
```

### Client Application
- Start the client application

```sh
cd client
yarn start
```
- Launch the client application
  In the client application, http://localhost:3000/

- config server information into the host
  (+) Extension: core.manage.host, Server: host

```json
{
  "$schema": "./schema/host.schema.json",
  "properties": [
    {
      "type": "server",
      "name": "host",
      "value": {
        "hostUrl": "http://localhost:9000",
        "isHost": true
      }
    },
    {
      "type": "server",
      "name": "<server id>",
      "value": {
        "hostUrl": "http://<server name>:<port>"
      }
    }
  ]
}
```

- config server
  (+) Extension: core.manage.server, Server: <server id>
  example: add a db type configuration for sqlite db

```json
{
  "$schema": "./schema/server.schema.json",
  "properties": [
    {
      "name": "hostname",
      "value": "<server name>"
    },
    {
      "name": "sqlite db",
      "type": "db",
      "value": {
        "type": "sqlite",
        "database": "~/.run-anything/test/data/sqlite.db"
      }
    }
  ]
}
```

## Extensions

### db

see [TypeOrm](https://github.com/typeorm/typeorm) for:
- how to support your databases
- how to configure your connection
- oracle
  follow instructions in https://oracle.github.io/odpi/doc/installation.html#linux
  
```json
{
      "name": "<identify name>",
      "type": "db",
      "value": {
        "type": "oracle",
        "username": "<db user>",
        "password": "<db password>",
        "connectString": "<host[:port]/sid>"
      }
    }
```

