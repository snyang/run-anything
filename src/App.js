import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-sql';
import 'prismjs/prism.js';
import './styles/main.scss';
import SqlRestClient from './client/SqlRestClient';

const code = `Select *
From contacts
`;

class App extends React.Component {
  state = { code };

  render() {
    function handleClick(e) {
      e.preventDefault();
      new SqlRestClient().execute(JSON.stringify({sql: code})).then(function(response) {
        // all loaded
        alert('loaded: ' + JSON.stringify(response));
      }, function(error) {
        alert('error: ' + JSON.stringify(error));
      });
    }
    
    return (
      <div className='sqlConsole'>
        <div className='sqlEditor'>
          <Editor
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
        <div className='commandBar'>
          <button type="button" onClick={handleClick}>run</button>
        </div>
        <div className='sqlResult'>
          Result
        </div>
      </div>
    );
  }
}

export default App;
