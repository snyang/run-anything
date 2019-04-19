import { Application, Request, Response } from 'express';
import path = require('path');
import fs = require('fs');
import { IService } from './IService';

export class RootService implements IService {

  attach(application: Application) {
    // GET '/'
    application.get('/', this.loadDefaultPage);

    // OPTIONS *
    application.options('*', (request: Request, response: Response) => {
      response.json({
        status: 'OK'
      });
    });
  }

  loadDefaultPage(request: Request, response: Response) {
    let defaultPage = path.join(__dirname, 'index.html');
    if (!fs.existsSync(defaultPage)) {
      defaultPage = path.join(__dirname, '..', 'build', 'index.html');
    }
    response.sendFile(defaultPage);
  }

}