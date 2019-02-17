import ApplicationContext from './ApplicationContext';

export interface Tag {
  type: string;
  value: string;
}

export interface Context {
  tags: Tag[];
}

export default class SettingManager {

  static getSetting(context: Context, type: string): any {
    let name: string | undefined = this._getContextSetting(context, type);
    if (name === undefined) {
      return undefined;
    }

    let serverProperties = ApplicationContext.instance.serverSettings.properties;
    for (let index = 0; index < serverProperties.length; index++) {
      let property = serverProperties[index];
      if (property.type !== type
        || property.name !== name) {
        continue;
      }
      return property.value;
    }
  }

  static getTypeSettings(type: string) {
    let settings = [];
    let serverProperties = ApplicationContext.instance.serverSettings.properties;
    for (let index = 0; index < serverProperties.length; index++) {
      let property = serverProperties[index];
      if (property.type !== type) {
        continue;
      }
      settings.push(property);
    }

    return settings;
  }

  static _getContextSetting(context: Context, type: string): string | undefined {
    for (const tag of context.tags) {
      if (tag.type === type) {
        return tag.value;
      }
    }

    return undefined;
  }
}