import React from 'react';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        handleClick: props.handleClick,
        onTheme: props.onTheme,
        onAddConsole: props.onAddConsole,
        onEditSetting: props.onEditSetting
      };

    this.onTheme = this.onTheme.bind(this);
  }

  static get propTypes() {
    return {
      handleClick: PropTypes.func,
      onTheme: PropTypes.func,
      onAddConsole: PropTypes.func,
      onEditSetting: PropTypes.func
    };
  }

  onTheme(e) {
    e.preventDefault();
    this.state.onTheme(e.currentTarget.innerText)
  }

  render() {
    return (
      <div className='menu-bar'>
        <div className='menu-item left' onClick={this.state.onAddConsole}>+</div>
        <div className='menu-item left' onClick={this.state.onEditSetting}>*</div>
        <div className='menu-item right' onClick={this.state.handleClick}>?</div>
        <div className='menu-item right' onClick={this.onTheme}>gray</div>
        <div className='menu-item right' onClick={this.onTheme}>brown</div>
        <div className='menu-item right' onClick={this.onTheme}>blue</div>
        <div className='menu-item right' onClick={this.onTheme}>green</div>
        <div className='menu-item right' onClick={this.onTheme}>purple</div>
        <div className='menu-item right' onClick={this.onTheme}>yellow</div>
        <div className='menu-item right' onClick={this.onTheme}>orange</div>
        <div className='menu-item right' onClick={this.onTheme}>pink</div>
        <div className='menu-item right' onClick={this.onTheme}>red</div>
      </div>
    );
  }
}

export default Menu;