import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-json';
import 'prismjs/prism.js';
import CoreApiClient from './CoreApiClient';
import SettingManager from '../../core/SettingManager';
import SettingTypes from '../../core/SettingTypes';

export default class ServerManagerConsoleClient extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();

    this.onLoad = this.onLoad.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onShutdown = this.onShutdown.bind(this);
    this.state = {
      context: props.context,
      statement: 'load....',
    };
    this.onLoad();
  }

  static get propTypes() {
    return {
      context: PropTypes.object,
    };
  }

  onShutdown(e) {
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

  onSave(e) {
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

  onLoad(e) {
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
      <div className='console-panel'>
        <div className='console-editor'>
          <Editor
            ref={this.editorRef}
            value={this.state.statement}
            onValueChange={code => this.setState({ statement: code })}
            highlight={code => highlight(code, languages.json)}
            padding={10}
            style={{
              fontFamily: 'Consolas, monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div className='console-command-bar'>
          <button type="button left" onClick={this.onSave}>Save</button>
          <button type="button left" onClick={this.onLoad}>Refresh</button>
          <button type="button right" onClick={this.onShutdown}>Shutdown</button>
        </div>
      </div>
    );
  }
}