import { Application, Request, Response } from 'express';
import path = require('path');
import fs = require('fs');
import { IService } from './IService';
import { Startup } from '../StartServer';

export class RootService implements IService {
  // private _application: Application;

  attach(application: Application) {
    // this._application = application;
    application.get('/', this.loadDefaultPage);
    application.delete('/api/action/shutdown', this.shutdown)
  }

  loadDefaultPage(request: Request, response: Response) {
    let defaultPage = path.join(__dirname, 'index.html');
    if (!fs.existsSync(defaultPage)) {
      defaultPage = path.join(__dirname, '..', 'build', 'index.html');
    }
    response.sendFile(defaultPage);
  }

  shutdown(request: Request, response: Response) {
    response.json({message: 'shutdown...'});
    Startup.shutdown();
  }
}