import { Application } from 'express';
import { IService } from './IService';
import { RootService } from './RootService';
import { SqlService } from './SqlService';

export class ServiceRouter implements IService {

  attach(application: Application) {
    new RootService().attach(application);
    new SqlService().attach(application);
  }
}