import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        handleClick: props.handleClick,
        onAddConsole: props.onAddConsole,
        onEditSetting: props.onEditSetting
      };
  }

  static get propTypes() {
    return {
      handleClick: PropTypes.func,
      onAddConsole: PropTypes.func,
      onEditSetting: PropTypes.func
    };
  }

  render() {
    return (
      <div className='menu-bar'>
        <div className='menu-item left' onClick={this.state.onAddConsole}>+</div>
        <div className='menu-item left' onClick={this.state.onEditSetting}>*</div>
        <div className='menu-item right' onClick={this.state.handleClick}>?</div>
      </div>
    );
  }
}

export default Menu;