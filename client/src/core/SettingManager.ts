import ApplicationContext from './ApplicationContext';
import SettingTypes from './SettingTypes';
import ExtensionManager from './ExtensionManager';
import ExtensionInfo from './ExtensionInfo';

export interface Tag {
  type: string;
  value: string;
}

export interface Context {
  tags: Tag[];
}

export default class SettingManager {

  static getSetting(context: Context, type: string): any {
    let name: string | undefined = this.getContextSetting(context, type);
    if (name === undefined) {
      return undefined;
    }

    return this.getTypeNameHostSetting(type, name);
  }

  static getTypeNameHostSetting(type: string, name: String): any {
    let hostProperties = ApplicationContext.instance.hostSettings.properties;
    for (let index = 0; index < hostProperties.length; index++) {
      let property = hostProperties[index];
      if (property.type !== type
        || property.name !== name) {
        continue;
      }
      return property.value;
    }
  }

  static getExtensionInfo(context: Context): ExtensionInfo | undefined {
    let name: string | undefined = this.getContextSetting(context, SettingTypes.extension);
    if (name === undefined) {
      return undefined;
    }
    return ExtensionManager.getExtension(name!);
  }

  static getTypeSettings(type: string) {
    let settings = [];
    let hostProperties = ApplicationContext.instance.hostSettings.properties;
    for (let index = 0; index < hostProperties.length; index++) {
      let property = hostProperties[index];
      if (property.type !== type) {
        continue;
      }
      settings.push(property);
    }

    return settings;
  }

  static getServerTypeSettings(serverSettings: any, type: string) {
    let settings = [];
    let properties = serverSettings.properties;
    for (let index = 0; index < properties.length; index++) {
      let property = properties[index];
      if (property.type !== type) {
        continue;
      }
      settings.push(property);
    }

    return settings;
  }

  static getContextSetting(context: Context, type: string): string | undefined {
    for (const tag of context.tags) {
      if (tag.type === type) {
        return tag.value;
      }
    }

    return undefined;
  }
}