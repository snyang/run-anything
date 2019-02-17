import path = require('path');
import fs = require('fs');
import { ServerConstants } from './ServerConstants';

export default class ApplicationContext {
  private static _instance: ApplicationContext
  private _serverSettings: any;

  static get instance(): ApplicationContext {
    if (this._instance === undefined) {
      this._instance = new ApplicationContext();

      // read server settings
      this._instance._serverSettings = {};
      let file = path.join(__dirname, '..', ServerConstants.ServerSettingsPath);
      if (fs.existsSync(file)) {
        let json = fs.readFileSync(file, 'utf8');
        console.log(json);
        this._instance._serverSettings = JSON.parse(json);
      }
    }

    return this._instance;
  }
  get serverSettings() {
    return this._serverSettings;
  }

  set serverSettings(value: any) {
    this._serverSettings = value;
  }
}