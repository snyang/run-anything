import AppConfig from "../AppConfig";
import SettingManager from "./SettingManager";
import SettingTypes from "./SettingTypes";
import CoreApiClient from '../extensions/core/CoreApiClient';

export default class ApplicationContext {
  private static _instance: ApplicationContext
  private _hostSettings: any;

  static get instance(): ApplicationContext {
    this.initialize();
    return this._instance;
  }

  static async initialize() {
    if (this._instance === undefined) {
      this._instance = new ApplicationContext();
      // use the application config first
      this._instance._hostSettings = AppConfig.Settings;
      this.reinitialize();
    }
  }

  static async reinitialize() {
    // sync the host settings...
    let hostUrl = SettingManager.getTypeNameSetting(AppConfig.Settings, SettingTypes.server, 'host').hostUrl;
    this._instance._hostSettings = await new CoreApiClient(hostUrl).getSettings();
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