
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Dashboard from './components/board/Dashboard';

// import 'bulma';
import './static/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route to="/" component={Dashboard} />       
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
