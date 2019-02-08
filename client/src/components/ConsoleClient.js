import React from 'react';
import PropTypes from 'prop-types';
import SettingManager from '../core/SettingManager';
import SettingTypes from '../core/SettingTypes';

export default class ConsoleClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: props.context,
    };
  }

  static get propTypes() {
    return {
      context: PropTypes.object,
    };
  }
  
  render() {
    let Client = SettingManager.getSetting(this.state.context, SettingTypes.extension).getConsole();
    return (
      <Client context={this.state.context}/>
    );
  }
}