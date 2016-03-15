import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form/Form.jsx';
import DefaultMessage from './Messages/DefaultMessage.jsx';


class App extends React.Component {
    render() {
        return <div>
            <div className="filter__form">
                <Form />
                <DefaultMessage title="Welcome" description="Welcome to my Artyou front end test!" />
            </div>
            <div id="cards_render"></div>
        </div>;
    }
}

export default App;
