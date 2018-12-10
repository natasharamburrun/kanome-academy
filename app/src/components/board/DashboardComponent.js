
import React from 'react';
import axios from 'axios';

import Dashboard, { addWidget } from 'react-dazzle';

// import 'react-dazzle/lib/style/style.css';

const DEBUG = true;


class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      dashboard: []
    //   widgets: {
    //     WordCounter: {
    //       type: CounterWidget,
    //       title: 'Counter widget',
    //     }
    //   },
    //   layout: {
    //     rows: [{
    //       columns: [{
    //         className: 'col-md-12',
    //         widgets: [{key: 'WordCounter'}],
    //       }],
    //     }],
    //   }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/board')
    // axios.get(DEBUG ? 'localhost:4000/board' : '/board/')
      .then(res => {
        this.setState({ dashboard: res.data });
     });
  }

  render() {
		console.log(this.state);
		
   
    return (
      <main>
        <div className="dashboard container">
          <div className="row">
            {this.state.dashboard.map(dashboard => 
              <div key={dashboard.id}>

            
              <div className="col s12 m6">{dashboard.name}</div>
              <div className= "col s12 m5 offset-m1">{dashboard.due}</div>
           </div>
            )}
          {/* <Dashboard widgets={this.state.widgets} layout={this.state.layout} /> */}
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardComponent;