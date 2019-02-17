import { Application, Request, Response } from 'express';
import { IService } from './IService';
import { TypeOrmService } from '../db/TypeOrmService';
import SettingManager from '../core/SettingManager';

const RootPath = '/api/sql';
const type_db = 'db';

export class SqlService implements IService {
  attach(application: Application) {
    application.post(RootPath + "/action/execute", this.execute);
  }

  async execute(request: Request, response: Response) {
    let dbSetting = SettingManager.getSetting(request.body.context, type_db);
    if (dbSetting === undefined) {
      throw new Error('cannot find db setting.');
    }
    
    let service = new TypeOrmService(dbSetting);
    
    try {
      if (!request.is('application/json')) {
        throw new Error("please post body in 'Content-Type: application/json'.");
      }
      let result = await service.query(request.body.statement);
      response.json({ rows: result });
    } catch (error) {
      // use error object
      response.status(500).json(error);
    }
  }
}