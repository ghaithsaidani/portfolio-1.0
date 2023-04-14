import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './assets/scss/styles.scss'
import {Provider} from "react-redux";
import Store from "./store/Store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={Store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
)
