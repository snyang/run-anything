import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-sql';
import 'prismjs/prism.js';
import SqlRestClient from '../../api/SqlRestClient';
import SqlResultRender from '../../api/SqlResultRender'

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
      code: code,
      sqlRows: []
    };
  }

  handleClick(e) {
    e.preventDefault();
    let that = this;
    new SqlRestClient().execute(JSON.stringify({ sql: this.editorRef.current.props.value }))
      .then((response) => {
        that.resultRef.current.setState(
          {
            data: JSON.parse(response).rows,
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
          <SqlResultRender
            ref={this.resultRef}
            data={this.state.sqlRows} />
        </div>
      </div>
    );
  }
}

export default SqlConsoleClient;
