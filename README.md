# run-anything
Run Any Thing from Any Where

## How to setup
The product is in developing...

- Download the project

### Host Application
For simple, just use one of server applications.

```sh
cd server
yarn start
```

### Server Application
- Prerequests
  node v11.8.0+

- Configure a server deployment information
  Edit server/task/GulpConifg.js
  
- Launch the server application

```sh
cd server
yarn gulp
```

- Install database packages for need
- Start the server

```sh
yarn gulp start-server
```

### Client Application
- Launch the client html application

```sh
cd client
yarn start
```
## Extensions

### SQL

see [TypeOrm](https://github.com/typeorm/typeorm) for:
- how to support your databases
- how to configure your connection