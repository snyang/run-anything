import AppConfig from '../AppConfig';

class ExtensionManager {
  static _extensions = [];

  static loadExtensions() {
    if (this._extensions.length > 0) {
      return;
    }

    AppConfig.getExtensionEntries().forEach(
      (extension) => {
        let info = extension.getExtensionInfo();
        this._extensions.push(info);
      });
  }

  static getExtension(name) {
    this.loadExtensions();
    for (const extension of this._extensions) {
      if (extension.getName() === name) {
        return extension;
      }
    }

    alert('here')
    return undefined;
  }

  static getExtensions() {
    this.loadExtensions();
    return this._extensions;
  }
}

export default ExtensionManager;