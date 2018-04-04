import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FuelSavingsPage from './components/containers/FuelSavingsPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default class Routes extends Component {
  render() {
    const activeStyle = { color: 'blue' };
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
        <div>
          <div>
            <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
            {' | '}
            <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
            {' | '}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/fuel-savings" component={FuelSavingsPage} />
            <Route path="/about" component={AboutPage} />
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
