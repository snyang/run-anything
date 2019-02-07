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

const code = `Select *
From contacts
`;

class SqlConsoleClient extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
    this.resultRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      context: props.context,
      code: code,
      sqlRows: []
    };
  }

  static get propTypes() {
    return {
      context: PropTypes.object,
    };
  }

  handleClick(e) {
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
      .execute({ sql: this.editorRef.current.props.value })
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
            value={this.state.code}
            onValueChange={code => this.setState({ code })}
            highlight={code => highlight(code, languages.sql)}
            padding={10}
            style={{
              fontFamily: 'Consolas, monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div className='console-command-bar'>
          <button type="button" onClick={this.handleClick}>run</button>
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
