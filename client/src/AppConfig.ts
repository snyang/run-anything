// begin extension entries
import CoreEntry from './extensions/core/CoreEntry';
import SqlEntry from './extensions/sql/SqlEntry';
// end extension entries

import BaseExtensionEntry from './core/BaseExtensionEntry';
import SettingTypes from './core/SettingTypes';

export default class AppConfig {
  static _entries: BaseExtensionEntry[] = [
    CoreEntry,
    SqlEntry
  ];

  static _settings = {
    properties: [
      {
        name: 'localhost',
        type: SettingTypes.server,
        value:
        {
          hostUrl: 'http://localhost:3000',
          isHost: true,
        },
      },
    ]
  }

  static getExtensionEntries(): BaseExtensionEntry[] {
    return this._entries;
  }

  static getSettings() {
    return this._settings;
  }
}