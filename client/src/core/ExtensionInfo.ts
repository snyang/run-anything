import {ExtensionConsoleProps, ExtensionConsoleState} from './ExtensionConsoleExt'

export default class ExtensionInfo {
  private _name: string;
  private _console: React.ComponentClass<ExtensionConsoleProps, ExtensionConsoleState>;
  private _requiredClientSettingTypes: string[];
  private _requiredServerSettingTypes: string[];

  constructor(name: string, console: React.ComponentClass<ExtensionConsoleProps, ExtensionConsoleState>) {
    this._name = name;
    this._console = console;
    this._requiredClientSettingTypes = ['server'];
    this._requiredServerSettingTypes = [];
  }

  getName() {
    return this._name;
  }

  getConsole(): React.ComponentClass<ExtensionConsoleProps, ExtensionConsoleState> {
    return this._console;
  }

  get RequiredClientSettingTypes() {
    return this._requiredClientSettingTypes;
  }

  set RequiredClientSettingTypes(value: string[]) {
    this._requiredClientSettingTypes = value;
  }
  
  get RequiredServerSettingTypes() {
    return this._requiredServerSettingTypes;
  }

  set RequiredServerSettingTypes(value: string[]) {
    this._requiredServerSettingTypes = value;
  }
  
}