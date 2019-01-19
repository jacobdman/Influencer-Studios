import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import routes from './routes';
import Route from './Route';

class Routes extends Component {
  render() {
    return (
      <Switch>
        {routes.map((props, key) => {
          return <Route key={key} {...props} />;
        })}
      </Switch>
    );
  }
}

export default Routes;
