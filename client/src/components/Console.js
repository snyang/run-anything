import React from 'react';
import ConsoleTagBar from './ConsoleTagBar'
import ConsoleClient from './ConsoleClient'

class Console extends React.Component {
  render() {
    return (
      <div>
        <ConsoleTagBar />
        <ConsoleClient />
      </div>
    );
  }
}

export default Console;