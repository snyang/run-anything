
import RestClient from '../../core/RestClient';
import { ApiConstants } from './CoreConstants';
import SettingsBody from './model/SettingsBody';

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
    let result = await RestClient.get(`${this._hostUrl}${ApiConstants.SettingsPath}`);
    return SettingsBody.parse(result).getContent();
  }

  async updateSettings(body) {
    let result = await RestClient.put(`${this._hostUrl}${ApiConstants.SettingsPath}`, new SettingsBody(body));
    return result;
  }
}