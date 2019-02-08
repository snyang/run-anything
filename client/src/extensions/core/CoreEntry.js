import ExtensionInfo from '../../core/ExtensionInfo';
import SettingTypes from '../../core/SettingTypes';
import ServerManagerConsoleClient from './ServerManagerConsoleClient'
import EntryConstants from './CoreConstants';

export default class CoreEntry {
  static _name = EntryConstants.entryName;
  static _extensionInfo = undefined;

  static getExtensionInfo() {
    if (this._extensionInfo === undefined) {
      this._extensionInfo = new ExtensionInfo(this._name, ServerManagerConsoleClient);
      this._extensionInfo._requiredClientSettings = [SettingTypes.server];

    }
    return this._extensionInfo;
  }
}