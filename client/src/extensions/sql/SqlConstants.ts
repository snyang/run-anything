import SettingTypes from '../../core/SettingTypes';

export default class EntryConstants {
  static get entryName() { return 'sql'; }
  static get extensionQueryName() { return 'sql.query'; }
  static get settingTypeDb() { return SettingTypes.db; }
}

export class ApiConstants {
  static get ApiRoot() { return '/api/sql'; }
}

export class ApiExecuteConstants {
  static get path() { return `${ApiConstants.ApiRoot}/action/execute`; }
  static get BodyStatement() { return 'statement'; }
}

