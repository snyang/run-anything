import path = require('path');
import fs = require('fs');
import { ServerConstants } from './ServerConstants';

export default class ApplicationContext {
  private static _instance: ApplicationContext
  private _serverSettings: any;

  static get instance(): ApplicationContext {
    if (this._instance === undefined) {
      this._instance = new ApplicationContext();
      this.reinitializeServerSetting();
    }

    return this._instance;
  }

  static reinitializeServerSetting() {
    // read server settings
    ApplicationContext.instance._serverSettings = {};
    let file = path.join(__dirname, '..', ServerConstants.ServerSettingsPath);
    if (fs.existsSync(file)) {
      let json = fs.readFileSync(file, 'utf8');
      console.log(json);
      ApplicationContext.instance._serverSettings = JSON.parse(json);
    }
  }

  get serverSettings() {
    return this._serverSettings;
  }

  set serverSettings(value: any) {
    this._serverSettings = value;
  }
}