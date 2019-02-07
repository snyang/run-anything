import SettingTypes from '../../core/SettingTypes';

export default class EntryConstants {
  static get entryName() { return 'sql'; }
  static get settingTypeDb() { return SettingTypes.db; }
  static get ApiRoot() { return '/api/sql'; }
  static get ApiExecute() { return `${this.ApiRoot}/action/execute`; }
  static get ApiExecuteBodyStatement() { return 'statement'; }
  static get ApiExecuteResponseData() { return 'data'; }
  static get ApiExecuteResponseError() { return 'error'; }
}

export  class ApiConstants {
  static get ApiRoot() { return '/api/sql'; }
}

export  class ApiExecuteConstants {
  static get path() { return `${ApiConstants.ApiRoot}/action/execute`; }
  static get BodyStatement() { return 'statement'; }
}

