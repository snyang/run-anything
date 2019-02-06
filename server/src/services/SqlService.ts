import { Application, Request, Response } from 'express';
import path = require('path');
import { IService } from './IService';
import { TypeOrmService } from '../db/TypeOrmService';

const RootPath = '/api/sql'

export class SqlService implements IService {
  attach(application: Application) {
    application.post(RootPath + "/action/execute", this.execute);
  }

  async execute(request: Request, response: Response) {
    let service = new TypeOrmService({
      type: "sqlite",
      database: path.join(__dirname, '..', '..', 'test', 'data', 'sqlite.db')
    })
    try {
      if (!request.is('application/json')) {
        throw "please post body in 'Content-Type: application/json'.";
      }
      let result = await service.query(request.body.sql);
      response.json({ rows: result });
    } catch (error) {
      response.status(500).json({ error: error });
    }
  }
}