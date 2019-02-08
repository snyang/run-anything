import React from 'react';
import PropTypes from 'prop-types';

class ConsoleTagBar extends React.Component {
  constructor(props) {
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

  onClosePanel(e) {
    e.preventDefault();
    this.onCloseParentPanel();
  }

  render() {
    let tags = this.state.context.tags;
    let tagControls = [];
    for (let i = 0; i < tags.length; i++) {
      let tag = tags[i];
      tagControls.push(<div key={i} className='tag-item left'>{tag.type}: {tag.value} <span className='tag-close'>x</span></div>)
    }
    return (
      <div className='tag-bar'>
        <div className='tag-add left'>+</div>
        {tagControls}
        <div className='right' onClick={this.onClosePanel}>X</div>
      </div>
    );
  }
}

export default ConsoleTagBar;