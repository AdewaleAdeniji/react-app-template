// Main Entry point of application

// External Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Internal Modules
import './tailwind/main.css';
import "leaflet/dist/leaflet.css";
import * as serviceWorker from './serviceWorker';
import Log from './utilityLibrary/dev/logging'
// Redux
import store from './store/store'
// Containers
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "rc-dropdown/assets/index.css";

require('dotenv').config(); // Allows us to access our variables in the .env file of our root directory

// Ensures logging does not show in the console when the app is set to production
if (process.env.REACT_ENV !== 'production') {
    Log.info('Environment variables accessible');
}

ReactDOM.render(
        <Provider store={store}>
            <ToastContainer />
            <App />
        </Provider>,
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
