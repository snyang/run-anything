import 'rc-dialog/assets/index.css';
import * as React from 'react';
// import PropTypes from 'prop-types';
// use import Dialog from 'rc-dialog'
import Dialog from 'rc-dialog';
import ExtensionManager from '../core/ExtensionManager';
import SettingManager from '../core/SettingManager';
import SettingTypes from '../core/SettingTypes';
import CoreApiClient from '../extensions/core/CoreApiClient';

export interface Props {
  visible: boolean;
  onSave: Function;
}

export interface State {
  visible: boolean;
  extensionName?: string;
  serverTags?: any[];
}

export default class AddConsole extends React.Component<Props, State> {

  private extensionOptions = [];
  private serverOptions = [];

  private extensionRef: React.RefObject<HTMLSelectElement> = React.createRef()
  private serverRef: React.RefObject<HTMLSelectElement> = React.createRef();
  private serverSettingRefs: React.RefObject<HTMLSelectElement>[] = [];
  private onSave: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      visible: props.visible,
    };
    this.onSave = props.onSave;
    this.onClose = this.onClose.bind(this);
    this.onOk = this.onOk.bind(this);
    this.onExtensionChanged = this.onExtensionChanged.bind(this);
    this.onServerChanged = this.onServerChanged.bind(this);

    this.extensionRef = React.createRef();
    this.serverRef = React.createRef();
    this.initHostOptions();
  }

  onOk(e: React.MouseEvent) {
    e.preventDefault();
    this.setState({
      visible: false,
    });

    let value = {
      tags: [
        {
          type: 'extension',
          value: this.extensionRef.current.value
        },
        {
          type: 'server',
          value: this.serverRef.current.value
        }
      ]
    };

    for (let serverSettingRef of this.serverSettingRefs) {
      value.tags.push(
        {
          type: serverSettingRef.current.name,
          value: serverSettingRef.current.value
        }
      );
    }

    this.onSave(value);
  }

  onClose(e: React.SyntheticEvent) {
    e.preventDefault();
    this.setState({
      visible: false,
    });
  }

  onExtensionChanged(e: React.ChangeEvent) {
    e.preventDefault();

    // refresh extension settings of server
    this.initServerOptions();
  }

  onServerChanged(e: React.ChangeEvent) {
    e.preventDefault();

    // refresh extension settings of server
    this.initServerOptions();
  }

  initHostOptions(): void {
    let extensions = ExtensionManager.getExtensions();
    for (let i = 0; i < extensions.length; i++) {
      let optionValue = extensions[i].name;
      this.extensionOptions.push(<option key={optionValue} value={optionValue}>{optionValue}</option>);
    }

    let servers = SettingManager.getTypeSettings(SettingTypes.server);
    for (let i = 0; i < servers.length; i++) {
      let optionValue = servers[i].name;
      this.serverOptions.push(<option key={optionValue} value={optionValue}>{optionValue}</option>);
    }
  }

  async initServerOptions() {
    // get the selected extension
    let extension = ExtensionManager.getExtension(this.extensionRef.current.value);
    if (extension.RequiredServerSettingTypes.length === 0) {
      // do not need server settings
      this.serverSettingRefs = [];
      this.setState({
        serverTags: []
      });
      return;
    }

    let serverSetting = SettingManager.getTypeNameHostSetting(SettingTypes.server, this.serverRef.current.value);

    if (serverSetting === undefined) {
      alert("tag 'server' is not configured well.");
      return;
    }

    try {
      this.serverSettingRefs = [];
      let serverSettings = await new CoreApiClient(`${serverSetting.hostUrl}`).getServerSettings();
      let serverTags = [];
      for (let settingType of extension.RequiredServerSettingTypes) {
        serverTags.push(
          <div>
            <label>{settingType}:</label>
          </div>
        );

        let settingOptions = [];
        let typeSettings = SettingManager.getServerTypeSettings(serverSettings, settingType);
        for (let i = 0; i < typeSettings.length; i++) {
          let optionValue = typeSettings[i].name;
          settingOptions.push(<option key={optionValue} value={optionValue}>{optionValue}</option>);
        }
        let serverSettingRef: React.RefObject<HTMLSelectElement> = React.createRef();
        this.serverSettingRefs.push(serverSettingRef);
        serverTags.push(
          <div>
            <select name={settingType} ref={serverSettingRef}>
              {settingOptions}
            </select>
          </div>
        );
      }
      this.setState({
        serverTags: serverTags,
      })

    } catch (error) {
      this.serverSettingRefs = [];
      this.setState({
        serverTags: []
      })
      alert(JSON.stringify(error));
    }
  }

  render() {

    let footer = (
      <button onClick={this.onOk}>OK</button>
    );

    return (
      <Dialog
        visible={this.state.visible}
        wrapClassName='center'
        animation="zoom"
        maskAnimation="fade"
        onClose={this.onClose}
        style={{ width: 600, height: 600 }}
        title='New a Console'
        closeIcon={undefined}
        forceRender={true}
        footer={footer}
      >
        <div className='two-columns-grid'>
          <div>
            <label>Extension:</label>
          </div>
          <div>
            <select ref={this.extensionRef} onChange={this.onExtensionChanged}>
              {this.extensionOptions}
            </select>
          </div>
          <div>
            <label>Server:</label>
          </div>
          <div>
            <select ref={this.serverRef} onChange={this.onServerChanged}>
              {this.serverOptions}
            </select>
          </div>
          {this.state.serverTags}
        </div>
      </Dialog>
    );
  }
}
