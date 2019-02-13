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
    this.state.onTheme((e.currentTarget as HTMLDivElement).innerText)
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