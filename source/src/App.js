import React from 'react'
import AppRoutes from './routes'
// import LoadingContainer from '_containers/app/LoadingContainer'
// import { useTranslation } from 'react-i18next'

const App = () => {
    // const { t } = useTranslation('common')
    return (
        <>
            <AppRoutes />
        </>
    )
}

export default () => (
    <App />
)
