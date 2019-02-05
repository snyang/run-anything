import { Application, Request, Response } from 'express';
import { IService } from './IService';
const path = require('path');
const fs = require('fs');

export class RootService implements IService {

  attach(application: Application) {
    application.get('/', this.loadDefaultPage);
  }

  loadDefaultPage(request: Request, response: Response) {
    let defaultPage = path.join(__dirname, 'index.html');
    if (!fs.existsSync(defaultPage)) {
      defaultPage = path.join(__dirname, '..', 'build', 'index.html');
    }
    response.sendFile(defaultPage);
  }
}