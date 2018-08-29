import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


/**
 * The function waits till the chayns api is successfully loaded and
 * every additional functionality of it is ready to go,
 * renders the App component then
 * and finally initializes the ModeSwitch.
 * @return {Promise.<void>}
 */
async function init() {
    try {

        await chayns.ready;

        /**
         * Render the Component App inside the tappElement
         */
        const tappElement = document.querySelector('.tapp');
        ReactDOM.render(<App />, tappElement);
        /**
         * Initialize the ModeSwitch. The available modes are 'user mode' (default) and 'chayns® manager'.
         * You can specify content to display according to the current mode (see chayns 'mode' component).
         */
    } catch (err) {
        console.warn('no chayns environment found');
    }
}

init();
