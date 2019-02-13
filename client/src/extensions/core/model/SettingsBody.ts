export default class SettingsBody {

  private json: any;

  constructor(json: any) {
    this.json = json;
  }

  getJson() {
    return JSON.stringify(this);
  }

  getContent() {
    return this.json;
  }

  static parse(body) {
    return new SettingsBody(JSON.parse(body).json);
  }
}