import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Test</h1>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM .render(
    <App />,
    document.getElementById('root')
);

