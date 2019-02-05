import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Counter from './Counter';

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <Counter />;
    </Provider>
    )
  }
}

export default App;
