
import React from 'react';
import axios from 'axios';
import _ from 'lodash';


const DEBUG = true;


class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      dashboard: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/board')
    // axios.get(DEBUG ? 'localhost:4000/board' : '/board/')
      .then(res => {
        this.setState({ dashboard: res.data });
     });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const seachRegex = new RegExp(this.state.search, 'i');
    const filterName = _.filter(this.state.data, (dashboard) => seachRegex.test(dashboard.title));
    this.setState({ filterName })
    // return dashboard.filter(dashboard => seachRegex.test(dashboard.name));
  }


  

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });

  }



  render() {
		console.log(this.state);
		
   
    return (
      <main>
        <div className="title container">
          <h1 className='title'>Kano Academy Dashboard</h1>
        </div>

        <form className="searchbar" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Search</label>
            <div className="control">
              <input className="input" name="search" type="text" placeholder="Search by name" onChange={this.handleChange} />
            </div>
          </div>
          <button className="button">Search</button>
        </form>

        <div className="dashboard container">
          <div className="row">
            {this.state.dashboard.map(dashboard => 
              <div key={dashboard.id}>           
              <div className="col s12 m6">{dashboard.name}</div>
              <div className="col s12 m5 offset-m1">{dashboard.due}</div>
              <div className="col s12 m6">{dashboard.dueComplete}</div>
              <div className="col s12 m6">{dashboard.desc}</div>
           </div>
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardComponent;