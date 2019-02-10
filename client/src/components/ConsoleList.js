import React from 'react';
import Console from './Console'

const sampleData = [{
  tags: [
    {
      type: 'extension',
      value: 'sql'
    },
    {
      type: 'server',
      value: 'localhost'
    }]
}
];

class ConsoleList extends React.Component {
  constructor(props) {
    super(props);

    this.tagsArray = sampleData;
    this.state = {
      tagsArray: this.tagsArray
    }
  }

  addConsole(tags) {

    this.tagsArray.push(tags);
    this.setState(
      {
        tagsArray: this.tagsArray
      }
    );
  }
  render() {
    let consoles = [];
    for (let i = 0; i < this.state.tagsArray.length; i++) {
      consoles.push(<Console key={i} tags={this.state.tagsArray[i].tags} />)
    }

    return (
      <>
        {consoles}
      </>
    );
  }
}

export default ConsoleList;