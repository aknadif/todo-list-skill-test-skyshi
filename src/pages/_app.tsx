import React from 'react';
import '@/styles/globals.css';
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';

import store from '@/store';
import {Navbar} from '@/components';

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Navbar />
            <Component {...pageProps} />
        </Provider>
    );
}
