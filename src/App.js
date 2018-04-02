import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers/history';
import { alertActions } from './actions/alert.actions';
import { PrivateRoute } from './views/PrivateRoute';
import { HomeView } from './views/Home';
import { LoginView } from './views/Login';

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
          <div className="container-fluid no-gutters">
            <Switch>
              <Route path={`${process.env.PUBLIC_URL}/login`} component={LoginView} />
              <PrivateRoute path={`${process.env.PUBLIC_URL}/`} component={HomeView} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };