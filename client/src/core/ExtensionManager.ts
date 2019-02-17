import AppConfig from '../AppConfig';
import ExtensionInfo from './ExtensionInfo';

class ExtensionManager {
  static _extensions: ExtensionInfo[] = [];

  static loadExtensions() {
    if (this._extensions.length > 0) {
      return;
    }

    for (let entry of AppConfig.extensionEntries) {
      for (let info of entry.getExtensions()) {
        this._extensions.push(info);
      }
    }
  }

  static getExtension(name: string) {
    this.loadExtensions();
    for (const extension of this._extensions) {
      if (extension.name === name) {
        return extension;
      }
    }

    return undefined;
  }

  static getExtensions(): ExtensionInfo[] {
    this.loadExtensions();
    return this._extensions;
  }
}

export default ExtensionManager;