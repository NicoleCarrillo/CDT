import React from 'react'
import { Redirect } from 'react-router-dom'
import utilitiesRoutes from './views/utilities/UtilitiesRoutes'
import materialRoutes from './views/material-kit/MaterialRoutes'
import formsRoutes from './views/forms/FormsRoutes'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/session/signin" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    ...materialRoutes,
    ...utilitiesRoutes,
    ...formsRoutes,
    ...redirectRoute,
    ...errorRoute,
]

export default routes
