// begin extension entries
import CoreEntry from './extensions/core/CoreEntry';
import SqlEntry from './extensions/sql/SqlEntry';
// end extension entries

import BaseExtensionEntry from './core/BaseExtensionEntry';
import SettingTypes from './core/SettingTypes';

// const path = require('path');

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
          name: 'localhost',
          hostUrl: 'http://localhost:9000',
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