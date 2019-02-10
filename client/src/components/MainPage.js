import React from 'react';
import Menu from './Menu'
import AddConsole from './AddConsole'
import ConsoleList from './ConsoleList'
import ThemeManager from '../styles/themes/ThemeManager';

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.addConsoleRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    // this.onTheme = this.onTheme.bind(this);
    this.onAddConsole = this.onAddConsole.bind(this);
    this.onAddConsoleSave = this.onAddConsoleSave.bind(this);
    this.state = {
      showAddConsole: false,
      Consoles: [
        {}
      ]
    }

    this.consoleListRef = React.createRef();
  }

  handleClick(e) {
    e.preventDefault();
    alert(e.currentTarget.innerText)
  }

  onTheme(name) {
    ThemeManager.onTheme(name);
  }

  handleClick_EditSetting(e) {
    e.preventDefault();
    alert(e.currentTarget.innerText)
  }

  onAddConsole(e) {
    e.preventDefault();
    this.addConsoleRef.current.setState({
      visible: true
    })
  }

  onAddConsoleSave(value) {
    this.consoleListRef.current.addConsole(value);
  }

  render() {
    return (
      <>
        <AddConsole
          ref={this.addConsoleRef}
          visible={this.state.showAddConsole}
          onSave={this.onAddConsoleSave} />
        <Menu onAddConsole={this.onAddConsole} onTheme={this.onTheme} />
        <ConsoleList ref={this.consoleListRef} />
      </>
    );
  }
}

export default MainPage;