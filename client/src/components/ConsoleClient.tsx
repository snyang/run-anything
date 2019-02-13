import React from 'react';
import SettingManager from '../core/SettingManager';
import { ExtensionConsoleProps, ExtensionConsoleState } from '../core/ExtensionConsoleExt'

export default class ConsoleClient extends React.Component<ExtensionConsoleProps, ExtensionConsoleState> {
  constructor(props: ExtensionConsoleProps) {
    super(props);
    this.state = {
      context: props.context,
    };
  }

  render() {
    let Client = SettingManager.getExtensionInfo(this.state.context).getConsole();
    return (
      <Client context={this.state.context} />
    );
  }
}