import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick_AddConsole = this.handleClick_AddConsole.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    alert(e.currentTarget.innerText)
  }

  handleClick_AddConsole(e) {
    e.preventDefault();
    alert(e.currentTarget.innerText)
  }

  render() {
    return (
      <div className='menu-bar'>
        <span className='menu-item left' onClick={this.handleClick_AddConsole}>+</span>
        <div className='menu-item left' onClick={this.handleClick}>&gt;</div>
        <div className='menu-item left' onClick={this.handleClick}>&lt;</div>
        <div className='menu-item right' onClick={this.handleClick}>?</div>
      </div>
    );
  }
}

export default Menu;