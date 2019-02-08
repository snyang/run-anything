
import RestClient from '../../core/RestClient';
import { ApiConstants } from './CoreConstants';
import SettingsBody from './model/SettingsBody';

export default class SqlRestClient {
  constructor(hostUrl) {
    this.hostUrl = hostUrl;
  }

  async shutdown() {
    let result = await RestClient.delete(`${this.hostUrl}${ApiConstants.ShutdownPath}`);
    return result;
  }

  async getSettings() {
    let result = await RestClient.get(`${this.hostUrl}${ApiConstants.SettingsPath}`);
    return SettingsBody.parse(result).json;
  }

  async updateSettings(body) {
    let result = await RestClient.put(`${this.hostUrl}${ApiConstants.SettingsPath}`, new SettingsBody(body));
    return result;
  }
}