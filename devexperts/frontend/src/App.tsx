import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <Switch>
      {Object.keys(routes).map((key) => {
        const { Component, ...rest } = routes[key];
        return <Route key={key} {...rest} render={() => <Component />} />;
      })}
    </Switch>
  );
}

export default App;
