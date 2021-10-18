import { Route, withRouter } from 'react-router-dom';

import SwapInterface from './SwapInterface/SwapInterface.container'

const routes = [
    {
        component: SwapInterface,
        path: '/',
    },
];
const Routes = withRouter(() => {
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
