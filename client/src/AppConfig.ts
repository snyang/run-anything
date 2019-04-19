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

  private static _settings = {
    properties: [
      {
        name: 'host',
        type: SettingTypes.server,
        value:
        {
          hostUrl: 'http://localhost:9000',
          isHost: true,
        },
      },
    ]
  }

  static get extensionEntries(): BaseExtensionEntry[] {
    return this._entries;
  }

  static get Settings() {
    return this._settings;
  }
}