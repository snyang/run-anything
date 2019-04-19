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
      let tagsArray = this.tagsArray[i];

      // get the console be freshed as the key is changed.
      let extensionName = SettingManager.getContextSetting(tagsArray, SettingTypes.extension);
      for (let tag of tagsArray.tags) {
        extensionName += "_" + tag.value;
      }
      consoles.push(<Console key={extensionName} tags={tagsArray.tags} />)
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