import React from 'react';

export interface Props {
  handleClick?: (e: React.MouseEvent) => void;
  onTheme: (e: string) => void;
  onAddConsole: (e: React.MouseEvent) => void;
  onEditSetting?: (e: React.MouseEvent) => void;
}

export interface State {
  handleClick?: (e: React.MouseEvent) => void;
  onTheme: (e: string) => void;
  onAddConsole: (e: React.MouseEvent) => void;
  onEditSetting?: (e: React.MouseEvent) => void;
}

export default class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
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

  onTheme(e: React.MouseEvent) {
    e.preventDefault();
    this.state.onTheme((e.currentTarget as HTMLDivElement).title)
  }

  render() {
    let themeNames = ['gray', 'brown', 'blue', 'green', 'purple', 'yellow', 'orange', 'pink', 'red']
    let themeMenuList = [];
    for (let themeName of themeNames) {
      let style =
      {
        background: themeName,
        'margin-left': '2px',
        width: '40px',
        'min-width': '40px'
      }
      themeMenuList.push(<div className='menu-item right' key={themeName} title={themeName} onClick={this.onTheme} style={style}></div>);
    }

    return (
      <div className='menu-bar'>
        <div className='menu-item left' onClick={this.state.onAddConsole}>+</div>
        <div className='menu-item right' onClick={this.state.handleClick}>?</div>
        {themeMenuList}
      </div>
    );
  }
}