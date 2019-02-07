import React from 'react';
import ConsoleTagBar from './ConsoleTagBar'
import ConsoleClient from './ConsoleClient'

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        {
          type: 'server',
          value: 'localhost',
        },
        {
          type: 'extension',
          value: 'sql',
        },
        {
          type: 'db',
          value: 'sqlite db',
          where: 'server'
        }
      ],
    }
  }
  render() {
    return (
      <div>
        <ConsoleTagBar />
        <ConsoleClient context={this.state} />
      </div>
    );
  }
}

export default Console;