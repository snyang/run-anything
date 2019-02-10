import React from 'react';
import MainPage from './components/MainPage';
import './styles/main.css';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/prism.js';

Prism.highlightAll();

class App extends React.Component {
  render() {

    return (
      <MainPage />
    );
  }
}

export default App;
