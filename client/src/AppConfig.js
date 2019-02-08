// begin extension entries
import CoreEntry from './extensions/core/CoreEntry';
import SqlEntry from './extensions/sql/SqlEntry';
// end extension entries

import SettingTypes from './core/SettingTypes';

// const path = require('path');

export default class AppConfig {
  static _entries = [
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

  // static _serverSetting = {
  //   types: ['db'],
  //   name: 'localhost',
  //   properties: [
  //     { name: 'localhost' }
  //   ],
  //   settings: [
  //     {
  //       name: 'sqlite db',
  //       type: 'db',
  //       value: {
  //         type: "sqlite",
  //         database: path.join(__dirname, '..', '..', 'test', 'data', 'sqlite.db')
  //       }
  //     }
  //   ]
  // }

  static getExtensionEntries() {
    return this._entries;
  }

  static getSettings() {
    return this._settings;
  }
}