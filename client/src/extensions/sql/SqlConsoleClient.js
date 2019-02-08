import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-sql';
import 'prismjs/prism.js';
import SqlApiClient from './SqlApiClient';
import SqlApiResultRender from './SqlApiResultRender'
import SettingManager from '../../core/SettingManager';
import SettingTypes from '../../core/SettingTypes';
import ExecuteBody from './model/ExecuteBody'

const statement = `
`;

class SqlConsoleClient extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.resultRef = React.createRef();
    this.onExecute = this.onExecute.bind(this);
    this.state = {
      context: props.context,
      statement: statement,
      sqlRows: []
    };
  }

  static get propTypes() {
    return {
      context: PropTypes.object,
    };
  }

  onExecute(e) {
    e.preventDefault();
    let that = this;
    let server = SettingManager.getSetting(this.state.context, SettingTypes.server);

    if (server === undefined) {
      that.resultRef.current.setState({
        data: undefined,
        error: { error: "tag 'server' is not configured well." }
      });
      return;
    }

    new SqlApiClient(`${server.hostUrl}`)
      .execute(new ExecuteBody(this.editorRef.current.props.value))
      .then((response) => {
        that.resultRef.current.setState(
          {
            data: response.rows,
            error: undefined
          });
      })
      .catch((error) => {
        that.resultRef.current.setState({
          data: undefined,
          error: error
        });
      });
  }

  render() {

    return (
      <div className='console-panel'>
        <div className='console-editor'>
          <Editor
            ref={this.editorRef}
            value={this.state.statement}
            onValueChange={code => this.setState({ statement:code })}
            highlight={code => highlight(code, languages.sql)}
            padding={10}
            style={{
              fontFamily: 'Consolas, monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div className='console-command-bar'>
          <button type="button" onClick={this.onExecute}>Run</button>
        </div>
        <div className='console-result'>
          <SqlApiResultRender
            ref={this.resultRef}
            data={this.state.sqlRows} />
        </div>
      </div>
    );
  }
}

export default SqlConsoleClient;
