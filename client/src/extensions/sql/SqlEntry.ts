import ExtensionInfo from '../../core/ExtensionInfo';
import SettingTypes from '../../core/SettingTypes';
import SqlConsoleClient from './SqlConsoleClient';
import SqlConstants from './SqlConstants';
import BaseExtensionEntry from '../../core/BaseExtensionEntry';

export default class SqlEntry extends BaseExtensionEntry {
  static _name: string = SqlConstants.entryName;
  static _extensionInfo? : ExtensionInfo = undefined;

  static getExtensionInfo() {
    if (this._extensionInfo === undefined) {
      this._extensionInfo = new ExtensionInfo(this._name, SqlConsoleClient);
      this._extensionInfo!.RequiredClientSettingTypes = [SettingTypes.server];
      this._extensionInfo!.RequiredServerSettingTypes = [SqlConstants.settingTypeDb];
    }
    return this._extensionInfo;
  }
}