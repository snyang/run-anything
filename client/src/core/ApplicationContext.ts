import AppConfig from "../AppConfig";

export default class ApplicationContext {
  private static _instance: ApplicationContext
  private _hostSettings: any;

  static get instance(): ApplicationContext {
    if (this._instance === undefined) {
      this._instance = new ApplicationContext();
      this._instance._hostSettings = AppConfig.Settings;
    }

    return this._instance;
  }

  get hostSettings() {
    return this._hostSettings;
  }

  set hostSettings(value: any) {
    this._hostSettings = value;
  }

  getLocalSetting(key: string, defaultValue: string): string {
    let value = window.localStorage.getItem(key);
    if (value === undefined) {
      return defaultValue;
    }

    return value;
  }

  setLocalSetting(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }
}