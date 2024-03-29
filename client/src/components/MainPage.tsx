import React from 'react';
// import Math from 'math';
import Menu from './Menu';
import AddConsole from './AddConsole'
import ConsoleList from './ConsoleList'
import ThemeManager from '../styles/themes/ThemeManager';

export interface State {
  showAddConsole: boolean;
  Consoles: any[];
}

class MainPage extends React.Component<Object, State> {
  addConsoleRef = React.createRef<AddConsole>();
  consoleListRef = React.createRef<ConsoleList>();

  constructor(props: Object) {
    super(props);

    // this.onTheme = this.onTheme.bind(this);
    this.onAddConsole = this.onAddConsole.bind(this);
    this.onAddConsoleSave = this.onAddConsoleSave.bind(this);
    this.state = {
      showAddConsole: false,
      Consoles: [
        {}
      ]
    }

  }

  onTheme(name: string) {
    ThemeManager.onTheme(name);
  }

  onAddConsole(e: React.MouseEvent) {
    e.preventDefault();
    this.addConsoleRef.current!.setState({
      visible: true
    })
  }

  onAddConsoleSave(value: any) {
    this.consoleListRef.current!.addConsole(value);
  }

  render() {
    // let AddConsoleElement = undefined;
    // if (this.state.showAddConsole) {
    //   AddConsoleElement = <AddConsole
    //     key={Math.random()}
    //     ref={this.addConsoleRef}
    //     visible={true}
    //     onSave={this.onAddConsoleSave} />;
    // }
    return (
      <>
        <AddConsole
          key={Math.random()}
          ref={this.addConsoleRef}
          visible={false}
          onSave={this.onAddConsoleSave} />
        <Menu onAddConsole={this.onAddConsole} onTheme={this.onTheme} />
        <ConsoleList ref={this.consoleListRef} />
      </>
    );
  }
}

export default MainPage;