import React from 'react';
import { Provider } from 'react-redux';

import Main from './pages/Main';
import { store } from './store/store';
import Test from './Test';
import './reset.css';

function App() {
  return (
    <Provider store={store}>
      <Test />
      <Main />
    </Provider>
  );
}

export default App;
