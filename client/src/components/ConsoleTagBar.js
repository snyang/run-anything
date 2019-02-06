import React from 'react';

class ConsoleTagBar extends React.Component {
  render() {
    return (
      <div className='tag-bar'>
        <div className='tag-add left'>+</div>
        <div className='tag-item left'>conn: oracle <span className='tag-close'>x</span></div>
      </div>
    );
  }
}

export default ConsoleTagBar;