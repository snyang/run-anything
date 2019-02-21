import React from 'react';
import PropTypes from 'prop-types';

export interface Props {
  context: any;
  onClosePanel: Function;
}

export interface State {
  context: any;
}
class ConsoleTagBar extends React.Component<Props, State> {
  onCloseParentPanel: Function;
  constructor(props: Props) {
    super(props);
    this.state = {
      context: props.context,
    };
    this.onCloseParentPanel = props.onClosePanel;
    this.onClosePanel = this.onClosePanel.bind(this);
  }

  static get propTypes() {
    return {
      context: PropTypes.object,
      onClosePanel: PropTypes.func
    };
  }

  onClosePanel(e: React.MouseEvent) {
    e.preventDefault();
    this.onCloseParentPanel();
  }

  render() {
    let tags = this.state.context.tags;
    let tagControls = [];
    for (let i = 0; i < tags.length; i++) {
      let tag = tags[i];
      tagControls.push(<div key={i} className='tag-item left'>{tag.type}: {tag.value}</div>)
    }
    return (
      <div className='console-pane tag-bar'>
        {tagControls}
      </div>
    );
  }
}

export default ConsoleTagBar;