import React from 'react';
import PropTypes from 'prop-types';
import ConsoleTagBar from './ConsoleTagBar'
import ConsoleClient from './ConsoleClient'

export interface Props {
  tags: any[];
  visible?: boolean;
}

export interface State {
  tags: any[];
  visible: boolean;
}

export default class Console extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tags: props.tags,
      visible: props.visible === undefined ? true : props.visible,
    }
  }

  static get propTypes() {
    return {
      tags: PropTypes.array,
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
      <>
        <ConsoleTagBar context={this.state} onClosePanel={this.onClosePanel} />
        <ConsoleClient context={this.state} />
      </>
    );
  }
}