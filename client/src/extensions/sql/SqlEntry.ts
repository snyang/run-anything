import ExtensionInfo from '../../core/ExtensionInfo';
import SettingTypes from '../../core/SettingTypes';
import SqlConsoleClient from './SqlConsoleClient';
import SqlConstants from './SqlConstants';
import BaseExtensionEntry from '../../core/BaseExtensionEntry';

export default class SqlEntry extends BaseExtensionEntry {
  static _name: string = SqlConstants.entryName;

  static _extensions: ExtensionInfo[] = [];

  static getExtensionsInfo() {
    if (this._extensions.length === 0) {
      let info = new ExtensionInfo(SqlConstants.extensionQueryName, 'SQL: Query', SqlConsoleClient);
      info.RequiredClientSettingTypes = [SettingTypes.server];
      this._extensions.push();
    }
    return this._extensions;
  }
}