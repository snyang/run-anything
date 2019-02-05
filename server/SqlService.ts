import { Application, Response } from 'express';
import { IService } from './IService';
import { TypeOrmService } from './db/TypeOrmService';

const path = require('path');

const RootPath = '/api/sql'

export class SqlService implements IService {
  attach(application: Application) {
    application.post(RootPath + "/action/execute", this.execute);
  }

  execute(request: any, response: Response) {
    let service = new TypeOrmService({
      type: "sqlite",
      database: path.join(__dirname, '..', 'test', 'data', 'sqlite.db')
    })
    service.query(request.body.sql).
      then((result) => {
        response.send(JSON.stringify(result));
      })
      .catch((error) => {
        response.send(JSON.stringify(error));
      });
  }
}