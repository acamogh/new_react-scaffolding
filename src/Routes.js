import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

export default class Routes extends Component {
  render() {
    const activeStyle = { color: 'blue' };
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Routes.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}; 
