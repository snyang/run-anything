import React from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-sql';
import SqlApiClient from './SqlApiClient';
import SqlApiResultRender from './SqlResultRender'
import SettingManager from '../../core/SettingManager';
import SettingTypes from '../../core/SettingTypes';
import ExecuteBody from './model/ExecuteBody'

import ExtensionConsoleProps from '../../core/ExtensionConsoleProps';
import ExtensionConsoleState from '../../core/ExtensionConsoleState';

export interface State extends ExtensionConsoleState {
  statement: string;
  sqlRows: any[];
}

const statement: string = `SELECT * 
FROM Contacts 
WHERE true;
`;

export default class SqlConsoleClient extends React.Component<ExtensionConsoleProps, State> {
  private editorRef: any = React.createRef<Editor>();  // tricky to use any
  private resultRef = React.createRef<SqlApiResultRender>();

  constructor(props) {
    super(props);
    this.onExecute = this.onExecute.bind(this);
    this.state = {
      context: props.context,
      statement: statement,
      sqlRows: []
    };
  }

  onExecute(e) {
    e.preventDefault();
    let that = this;
    // clear result
    that.resultRef.current.setState({
      data: undefined,
      error: { error: "query..." }
    });

    // query
    let server = SettingManager.getSetting(this.state.context, SettingTypes.server);

    if (server === undefined) {
      that.resultRef.current.setState({
        data: undefined,
        error: { error: "tag 'server' is not configured well." }
      });
      return;
    }

    new SqlApiClient(`${server.hostUrl}`)
      .execute(new ExecuteBody(this.state.context, this.editorRef.current.props.value))
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
      <>
        <div className='console-pane console-editor'>
          <Editor
            ref={this.editorRef}
            value={this.state.statement}
            onValueChange={code => this.setState({ statement: code })}
            highlight={code => Prism.highlight(code, Prism.languages.sql)}
            padding={2}
          />
        </div>
        <div className='console-pane console-command-bar'>
          <button type="button" onClick={this.onExecute}>Run</button>
        </div>
        <div className='console-pane console-result'>
          <SqlApiResultRender
            ref={this.resultRef}
            data={this.state.sqlRows} />
        </div>
      </>
    );
  }
}