import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

app();

function app() {
    ReactDOM.render(<App />, document.getElementById('app'));
}
