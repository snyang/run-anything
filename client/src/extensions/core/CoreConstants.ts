export default class EntryConstants {
  static get entryName() { return 'core'; }
}

export class ApiConstants {
  static get ApiRoot() { return '/api/core'; }
  static get ShutdownPath() { return `${this.ApiRoot}/action/shutdown`; }
  static get SettingsPath() { return `${this.ApiRoot}/settings`; }
}
