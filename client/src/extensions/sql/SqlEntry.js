import ExtensionInfo from '../../core/ExtensionInfo';
import SqlConsoleClient from './SqlConsoleClient';
import SettingTypes from '../../core/SettingTypes';
import SqlConstants from './SqlConstants';

export default class SqlEntry {
  static _name = SqlConstants.entryName;
  static _extensionInfo = undefined;

  static getExtensionInfo() {
    if (this._extensionInfo === undefined) {
      this._extensionInfo = new ExtensionInfo(this._name, SqlConsoleClient);
      this._extensionInfo._requiredClientSettings = [SettingTypes.server];
      this._extensionInfo._requiredServerSettings = [SqlConstants.settingTypeDb];
    }
    return this._extensionInfo;
  }
}