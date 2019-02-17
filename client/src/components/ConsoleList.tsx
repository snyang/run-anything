import React from 'react';
import Console from './Console'
import SettingManager from '../core/SettingManager';
import SettingTypes from '../core/SettingTypes';

const sampleData = [{
  tags: [
    {
      type: 'extension',
      value: 'sql.query'
    },
    {
      type: 'server',
      value: 'localhost'
    }]
}
];

export interface State {
  consoles: any;
}

class ConsoleList extends React.Component<Object, State> {
  private tagsArray = sampleData;

  constructor(props: Object) {
    super(props);

    this.state = {
      consoles: [],
    };
    // this.addConsole(sampleData);
  }

  addConsole(tags: any) {
    this.tagsArray = [];
    this.tagsArray.push(tags);
    let consoles = [];
    for (let i = 0; i < this.tagsArray.length; i++) {
      let extensionName = SettingManager.getContextSetting(this.tagsArray[i], SettingTypes.extension);
      consoles.push(<Console key={extensionName} tags={this.tagsArray[i].tags} />)
    }
    this.setState(
      {
        consoles: consoles,
      }
    );
  }

  render() {


    return (
      <>
        {this.state.consoles}
      </>
    );
  }
}

export default ConsoleList;