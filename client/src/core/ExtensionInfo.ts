import ExtensionConsoleProps from './ExtensionConsoleProps';
import ExtensionConsoleState from './ExtensionConsoleState';

export default class ExtensionInfo {
  private _name: string;
  private _information: string;
  private _console: React.ComponentClass<ExtensionConsoleProps, ExtensionConsoleState>;
  private _requiredClientSettingTypes: string[];
  private _requiredServerSettingTypes: string[];

  constructor(name: string,
    information: string,
    console: React.ComponentClass<ExtensionConsoleProps, ExtensionConsoleState>
  ) {
    this._name = name;
    this._information = information;
    this._console = console;
    this._requiredClientSettingTypes = ['server'];
    this._requiredServerSettingTypes = [];
  }

  get Name() {
    return this._name;
  }
  get Information() {
    return this._information;
  }

  get Console(): React.ComponentClass<ExtensionConsoleProps, ExtensionConsoleState> {
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