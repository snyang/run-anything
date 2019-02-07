
export default class ExtensionInfo {
  
  constructor(name, console) {
    this._name = name;
    this._console = console;
    this._requiredClientSettingTypes = ['server'];
    this._requiredServerSettingTypes = [];
  }
  getName() {
    return this._name;
  }

  getConsole() {
    return this._console;
  }

  getRequiredClientSettingTypes() {
    return this._requiredClientSettingTypes
  }

  getRequiredServerSettingTypes() {
    return this._requiredServerSettingTypes
  }

}