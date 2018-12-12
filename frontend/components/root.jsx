import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

//dispatch prop just for testing delete later

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App dispatch={store.dispatch}/>
    </HashRouter>
  </Provider>
);

export default Root;
