import ExtensionInfo from '../../core/ExtensionInfo';
import SettingTypes from '../../core/SettingTypes';
import ServerManagerConsoleClient from './ServerManagerConsoleClient'
import EntryConstants from './CoreConstants';
import BaseExtensionEntry from '../../core/BaseExtensionEntry';

export default class CoreEntry extends BaseExtensionEntry {
  static _name = EntryConstants.entryName;
  static _extensionInfo?: ExtensionInfo = undefined;

  static getExtensionInfo() {
    if (this._extensionInfo === undefined) {
      this._extensionInfo = new ExtensionInfo(this._name, ServerManagerConsoleClient);
      this._extensionInfo!.RequiredClientSettingTypes = [SettingTypes.server];

    }
    return this._extensionInfo;
  }
}