import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import store from '@store';
import reportWebVitals from './reportWebVitals';
import { setSiteSlug } from '@store/actions/app';
import { ensureArray } from '@utils';

import App from './App';
import LanguageProvider from '@locales/LanguageProvider';

import '@assets/scss/index.scss';

store.dispatch(setSiteSlug(ensureArray(window.location.pathname.split('/'))[1]));

render(
    <React.StrictMode>
        <Provider store={store}>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
