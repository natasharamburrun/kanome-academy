
import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Moment from 'react-moment';
import MembersComponent from './MembersComponent';


const DEBUG = true;


class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dashboard: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/board')
      .then(res => {
        this.setState({ 
          dashboard: res.data,
        });
     });
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value.toLowerCase() });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const searchRegEx = new RegExp(this.state.search, 'i');
    const filteredData = _.filter(this.state.dashboard, (dashboard) => searchRegEx.test(dashboard.name));
    this.setState({ filteredData });
  }

  render() {
		console.log(this.state); 
    return (
      <main>
        <div className="title container">
          <h1 className='title'>Kano Academy Dashboard</h1>
        </div>
        <form className="searchbar container"  onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <input className="input" name="search" type="text" placeholder="Search by Task Name" onChange={this.handleChange} />
            </div>
          </div>
          <button className="button">Search</button>
        </form>
        <div className="dashboard container">
          <div className="columns is-multiline">
          {(this.state.filteredData? this.state.filteredData : this.state.dashboard).map(dashboard =>
              <div key={dashboard.id}>
              <div className="card">      
                <div className="taskName">{dashboard.name}</div>
                <div className="dueDate">
                  <Moment format="YYYY/MM/DD">{dashboard.due}</Moment>
                </div>
                <div className="dueComplete">{dashboard.dueComplete}</div>
                <div className="members">
                  <MembersComponent cardId={dashboard.id} />
                </div>
              </div>
           </div>
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardComponent;