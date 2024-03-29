import React from 'react';
import MainPage from './components/MainPage';
import './styles/main.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/prism.js';
import ThemeManager from './styles/themes/ThemeManager';
import ApplicationContext from './core/ApplicationContext';

Prism.highlightAll();
ApplicationContext.initialize();

class App extends React.Component {
  constructor(props) {
    super(props);

    ThemeManager.onTheme(undefined);
  }
  render() {

    return (
      <MainPage />
    );
  }
}

export default App;
