import React from 'react';
import Menu from './Menu'
import AddConsole from './AddConsole'
import ConsoleList from './ConsoleList'

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <AddConsole />
        <Menu />
        <ConsoleList />
      </div>
    );
  }
}

export default MainPage;