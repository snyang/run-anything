import React from 'react';
import Editor from 'react-simple-code-editor';
import CoreApiClient from './CoreApiClient';
import SettingManager from '../../core/SettingManager';
import SettingTypes from '../../core/SettingTypes';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import { ExtensionConsoleProps, ExtensionConsoleState } from '../../core/ExtensionConsoleExt'

export interface State extends ExtensionConsoleState {
  statement: string;
}

export default class ServerManagerConsoleClient extends React.Component<ExtensionConsoleProps, State> {
  private editorRef: any = React.createRef<Editor>()

  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onShutdown = this.onShutdown.bind(this);
    this.state = {
      context: props.context,
      statement: 'load....',
    };
    this.onLoad(undefined);
  }

  onShutdown(e: React.MouseEvent) {
    e.preventDefault();
    let server = SettingManager.getSetting(this.state.context, SettingTypes.server);

    if (server === undefined) {
      alert("tag 'server' is not configured well.");
      return;
    }

    new CoreApiClient(`${server.hostUrl}`)
      .shutdown()
      .then((response) => {
        alert('Shutdown is done.');
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  }

  onSave(e: React.MouseEvent) {
    e.preventDefault();
    let server = SettingManager.getSetting(this.state.context, SettingTypes.server);

    if (server === undefined) {
      alert("tag 'server' is not configured well.");
      return;
    }

    new CoreApiClient(`${server.hostUrl}`)
      .updateSettings(this.editorRef.current.props.value)
      .then((response) => {
        alert('Saved.');
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  }

  onLoad(e: React.MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    let server = SettingManager.getSetting(this.state.context, SettingTypes.server);

    if (server === undefined) {
      alert("tag 'server' is not configured well.");
      return;
    }

    new CoreApiClient(`${server.hostUrl}`)
      .getSettings()
      .then((response) => {
        this.setState({ statement: JSON.stringify(response, null, 2) })
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      });
  }

  render() {

    return (
      <div className='.console-client'>
        <div className='console-pane console-editor'>
          <Editor
            ref={this.editorRef}
            value={this.state.statement}
            onValueChange={code => this.setState({ statement: code })}
            highlight={code => Prism.highlight(code, Prism.languages.json)}
          />
        </div>
        <div className='console-pane console-command-bar'>
          <button type="button left" onClick={this.onSave}>Save</button>
          <button type="button left" onClick={this.onLoad}>Refresh</button>
          <button type="button right" onClick={this.onShutdown}>Shutdown</button>
        </div>
      </div>
    );
  }
}