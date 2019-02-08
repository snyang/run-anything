export default class SettingsBody {

  constructor(json) {
    this.json = json;
  }

  getJson() {
    return JSON.stringify(this);
  }

  static parse(result) {
    return new SettingsBody(JSON.parse(result).json);
  }
}