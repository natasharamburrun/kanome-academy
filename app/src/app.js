
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import DashboardComponent from './components/board/DashboardComponent';
import MembersComponent from './components/board/MembersComponent';

import 'bulma';
import './static/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>     
          <Route to="/" component={DashboardComponent} />     
        </div>
      </BrowserRouter> 
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
