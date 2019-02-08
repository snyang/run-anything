import React from 'react';
import PropTypes from 'prop-types';
import ConsoleTagBar from './ConsoleTagBar'
import ConsoleClient from './ConsoleClient'

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: props.tags,
      visible: props.visible === undefined ? true : props.visible,
    }
  }

  static get propTypes() {
    return {
      tags: PropTypes.object,
      visible: PropTypes.bool,
    };
  }

  onClosePanel() {
    alert('close..');
    this.setState({ visible: false });
  }

  render() {
    if (!this.state.visible) {
      return (<div />);
    }
    return (
      <div>
        <ConsoleTagBar context={this.state} onClosePanel={this.onClosePanel} />
        <ConsoleClient context={this.state} />
      </div>
    );
  }
}

export default Console;