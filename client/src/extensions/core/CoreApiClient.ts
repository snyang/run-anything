
import RestClient from '../../core/RestClient';
import { ApiConstants } from './CoreConstants';
import SettingsBody from './model/SettingsBody';
import ApplicationContext from '../../core/ApplicationContext';

export default class SqlRestClient {
  private _hostUrl: string;

  constructor(hostUrl) {
    this._hostUrl = hostUrl;
  }

  async shutdown() {
    let result = await RestClient.delete(`${this._hostUrl}${ApiConstants.ShutdownPath}`);
    return result;
  }

  async getSettings() {
    let result = await RestClient.get(`${this._hostUrl}${ApiConstants.HostSettingsPath}`);
    return SettingsBody.parse(result).getContent();
  }

  async updateSettings(body) {
    let result = await RestClient.put(`${this._hostUrl}${ApiConstants.HostSettingsPath}`, new SettingsBody(body));
    ApplicationContext.reinitialize();
    return result;
  }

  async getServerSettings() {
    let result = await RestClient.get(`${this._hostUrl}${ApiConstants.ServerSettingsPath}`);
    return SettingsBody.parse(result).getContent();
  }

  async updateServerSettings(body) {
    let result = await RestClient.put(`${this._hostUrl}${ApiConstants.ServerSettingsPath}`, new SettingsBody(body));
    return result;
  }
}