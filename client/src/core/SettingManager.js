import AppConfig from '../AppConfig';
import SettingTypes from './SettingTypes';
import ExtensionManager from './ExtensionManager';

class SettingManager {
  static getSetting(context, type) {
    let name = this._getContextSetting(context, type);
    if (type === SettingTypes.extension) {
      return ExtensionManager.getExtension(name);
    }

    for (let index = 0; index < AppConfig._settings.properties.length; index++) {
      let property = AppConfig._settings.properties[index];
      if (property === {}
        || property.type !== type
        || property.name !== name) {
        continue;
      }
      return property.value;
    }
  }

  static getTypeSettings(type) {
    let settings = [];
    for (let index = 0; index < AppConfig._settings.properties.length; index++) {
      let property = AppConfig._settings.properties[index];
      if (property === {}
        || property.type !== type) {
        alert(property.type);
        continue;
      }
      settings.push(property);
    }

    return settings;
  }

  static _getContextSetting(context, type) {
    for (const tag of context.tags) {
      if (tag.type === type) {
        return tag.value;
      }
    }

    return undefined;
  }
}

export default SettingManager;