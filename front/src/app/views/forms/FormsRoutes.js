import React from 'react'

const formsRoutes = [
    {
        path: '/forms/basic',
        component: React.lazy(() => import('./BasicForm')),
    },
    {
        path: '/forms/upload',
        component: React.lazy(() => import('./UploadForm')),
    }
]

export default formsRoutes
