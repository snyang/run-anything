import 'rc-dialog/assets/index.css';
import * as React from 'react';
// import PropTypes from 'prop-types';
// use import Dialog from 'rc-dialog'
import Dialog from 'rc-dialog';
import ExtensionManager from '../core/ExtensionManager';
import SettingManager from '../core/SettingManager';
import SettingTypes from '../core/SettingTypes';

export interface Props {
  visible: boolean;
  onSave: Function;
}

export interface State {
  visible: boolean;
}

export default class AddConsole extends React.Component<Props, State> {

  private extensionRef: React.RefObject<HTMLSelectElement> = React.createRef()
  private serverRef: React.RefObject<HTMLSelectElement> = React.createRef();
  private onSave: Function;

  constructor(props: Props) {
    super(props);

    this.state = {
      visible: props.visible,
    };
    this.onSave = props.onSave;
    this.onClose = this.onClose.bind(this);
    this.onOk = this.onOk.bind(this);

    this.extensionRef = React.createRef();
    this.serverRef = React.createRef();
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
          value: this.extensionRef.current!.options[this.extensionRef.current!.selectedIndex].value
        },
        {
          type: 'server',
          value: this.serverRef.current!.options[this.serverRef.current!.selectedIndex].value
        }
      ]
    };

    this.onSave(value);
  }

  onClose(e: React.SyntheticEvent) {
    e.preventDefault();
    this.setState({
      visible: false,
    });
  }

  render() {

    let footer = (
      <button onClick={this.onOk}>OK</button>
    );
    let extensionOptions = [];
    let extensions = ExtensionManager.getExtensions();
    for (let i = 0; i < extensions.length; i++) {
      extensionOptions.push(<option key={extensions[i].getName()} value={extensions[i].getName()}>{extensions[i].getName()}</option>);
    }

    let serverOptions = [];
    let servers = SettingManager.getTypeSettings(SettingTypes.server);
    for (let i = 0; i < servers.length; i++) {
      serverOptions.push(<option key={servers[i].name} value={servers[i].name}>{servers[i].name}</option>);
    }
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
        <div >
          <div className='table'>
            <div>
              <div>
                <label>Function:</label>
              </div>
              <div>
                <select ref={this.extensionRef}>
                  {extensionOptions}
                </select>
              </div>
            </div>
            <div>
              <div>
                <label>Server:</label>
              </div>
              <div>
                <select ref={this.serverRef}>
                  {serverOptions}
                </select>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}
