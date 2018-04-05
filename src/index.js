/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import 'antd/dist/antd.css';
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();

render(
  <AppContainer>
    <Routes store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const NewRoot = require('./Routes').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
