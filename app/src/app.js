
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import DashboardComponent from './components/board/DashboardComponent';

// import 'bulma';
import './static/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route to="/" component={DashboardComponent} />       
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
