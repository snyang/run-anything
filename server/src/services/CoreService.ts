import { Application, Request, Response } from 'express';
import path = require('path');
import fs = require('fs');
import { IService } from './IService';
import { Startup } from '../StartServer';
import { ServerConstants } from './ServerConstants';

export class CoreService implements IService {

  attach(application: Application) {
    // DELETE shutdown
    application.delete('/api/core/action/shutdown', this.shutdown)

    // GET settings
    application.get('/api/core/settings/host', this.getSettings);

    // PUT settings(body)
    application.put('/api/core/settings/host', this.putSettings);

    // GET server settings
    application.get('/api/core/server/settings/server', this.getServerSettings);

    // PUT server settings(body)
    application.put('/api/core/server/settings/server', this.putServerSettings);

  }

  getSettings(request: Request, response: Response) {
    let settingFilePath = path.join(__dirname, '..', ServerConstants.SettingFilePath);
    let settingJson = {};
    if (fs.existsSync(settingFilePath)) {
      settingJson = { json: JSON.parse(fs.readFileSync(settingFilePath, 'utf8')) };
    }
    response.json(settingJson);
  }

  putSettings(request: Request, response: Response) {
    let settingFilePath = path.join(__dirname, '..', ServerConstants.SettingFilePath);
    fs.writeFileSync(settingFilePath, request.body.json, { encoding: 'utf8' });
    response.status(200).json(null);
  }

  getServerSettings(request: Request, response: Response) {
    let settingFilePath = path.join(__dirname, '..', ServerConstants.ServerSettingFilePath);
    let settingJson = {};
    if (fs.existsSync(settingFilePath)) {
      settingJson = { json: JSON.parse(fs.readFileSync(settingFilePath, 'utf8')) };
    }
    response.json(settingJson);
  }

  putServerSettings(request: Request, response: Response) {
    let settingFilePath = path.join(__dirname, '..', ServerConstants.ServerSettingFilePath);
    fs.writeFileSync(settingFilePath, request.body.json, { encoding: 'utf8' });
    response.status(200).json(null);
  }

  shutdown(request: Request, response: Response) {
    response.json({ message: 'shutdown...' });
    Startup.shutdown();
  }
}