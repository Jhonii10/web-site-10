import React from 'react';
import { useRoutes } from 'react-router-dom';
import Index from '../pages';
import Error404 from '../pages/404';

const Routes = () => {
    const routes = useRoutes([
        {
            path:'/',
            element:<Index/>,
            children:[
                { path:'about', element:<Index/>},
                { path:'jobs', element:<Index/>},
                { path:'projects', element:<Index/>},
                { path:'contact', element:<Index/>},
            ]

        },
        {
            path: '*',
            element: <Error404/>,
        },
    ])

    return routes


}

export default Routes;
