export default class EntryConstants {
  static get entryName() { return 'core'; }
  static get extensionManageHost() { return this.entryName + '.manage.host'; }
  static get extensionManageServer() { return this.entryName + '.manage.server'; }
}

export class ApiConstants {
  static get ApiRoot() { return '/api/core'; }
  static get ShutdownPath() { return `${this.ApiRoot}/action/shutdown`; }
  static get SettingsPath() { return `${this.ApiRoot}/settings/host`; }
  static get ServerSettingsPath() { return `${this.ApiRoot}/settings/server`; }
}
