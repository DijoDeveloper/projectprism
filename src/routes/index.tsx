import { Route, withRouter } from 'react-router-dom';

import React from 'react';
import Swap from '../containers/Swap/Swap.container';

const routes = [
  {
    component: Swap,
    path: '/',
  },
];
const Routes = withRouter(({ location }) => {
  return (
    <>
      {routes.map(route => {
        return (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </>
  );
});
export default Routes;
