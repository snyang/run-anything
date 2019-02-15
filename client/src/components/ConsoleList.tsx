import React from 'react';
import Console from './Console'

const sampleData = [{
  tags: [
    {
      type: 'extension',
      value: 'sql:query'
    },
    {
      type: 'server',
      value: 'localhost'
    }]
}
];

export interface State {
  tagsArray: any;
}

class ConsoleList extends React.Component<Object, State> {
  private tagsArray = sampleData;
  constructor(props: Object) {
    super(props);

    this.state = {
      tagsArray: this.tagsArray
    }
  }

  addConsole(tags: any) {

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