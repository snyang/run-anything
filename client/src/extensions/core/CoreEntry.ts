import ExtensionInfo from '../../core/ExtensionInfo';
import SettingTypes from '../../core/SettingTypes';
import ManageServerConsoleClient from './ManageServerConsoleClient'
import EntryConstants from './CoreConstants';
import BaseExtensionEntry from '../../core/BaseExtensionEntry';

export default class CoreEntry extends BaseExtensionEntry {
  static _name = EntryConstants.entryName;
  static _extensions: ExtensionInfo[] = [];

  static getExtensions() {
    if (this._extensions.length === 0) {
      let info = new ExtensionInfo(EntryConstants.extensionManageHost, 'Core: Manage the Host', ManageServerConsoleClient);
      this._extensions.push(info);

      info = new ExtensionInfo(EntryConstants.extensionManageServer, 'Core: Manage a Server', ManageServerConsoleClient);
      info.RequiredHostSettingTypes = [SettingTypes.server];
      this._extensions.push(info);
    }
    return this._extensions;
  }
}