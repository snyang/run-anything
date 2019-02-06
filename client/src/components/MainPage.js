import React from 'react';
import Menu from './Menu'
import ConsoleList from './ConsoleList'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <ConsoleList />
      </div>
    );
  }
}

export default MainPage;