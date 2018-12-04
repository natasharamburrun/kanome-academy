
import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';


// import 'bulma';
import './static/style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {


  }

  render() {
    return (
      <main>
        <h1>Kano Academy Dashboard</h1>
      </main>



    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
