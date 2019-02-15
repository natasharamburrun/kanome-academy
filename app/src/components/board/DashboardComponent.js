import React from "react";
import axios from "axios";
import _ from "lodash";
import Moment from "react-moment";
import MembersComponent from "./MembersComponent";

const DEBUG = true;

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "card",
      dashboard: []
    };
  }

  filterDashboard() {
    if (!!this.state.search) {
      const searchRegEx = new RegExp(this.state.search, "i");
      return _.filter(this.state.dashboard, dashboard =>
        searchRegEx.test(dashboard.name)
      );
    }
    return this.state.dashboard;
  }

  componentDidMount() {
    axios.get("http://localhost:4000/board").then(res => {
      this.setState({
        dashboard: res.data
      });
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value.toLowerCase()
    });
  };

  handleViewChange = ({ target: { name, value } }) => {
    console.log(value);
    this.setState({
      view: value
    });
  };

  renderCardView() {
    return this.filterDashboard().map(dashboard => (
      <div key={dashboard.id}>
        <div className="card column">
          <div className="taskName"> {dashboard.name} </div>
          <div className="dueDate">
            <Moment format="YYYY/MM/DD"> {dashboard.due} </Moment>
          </div>
          <div className="dueComplete">
            
            {dashboard.dueComplete ? "Completed" : "In Progress"}
          </div>
          <div className="members">
            <MembersComponent cardId={dashboard.id} />
          </div>
        </div>
      </div>
    ));
  }

  renderTableView() {
    return (
      <div className="filteredItems">
        <div className="column is-full">
          <table className="table is-bordered">
            <thead>
              <tr>
                <th> Task Name </th> 
                <th> Due Date </th> 
                <th> Completed </th>
                <th> Assigned Name </th>
              </tr>
            </thead>
            <tbody>
              
              {this.filterDashboard().map(dashboard => (
                <tr key={dashboard.id}>
                  <td> {dashboard.name} </td>
                  <td>
                    <div className="dueDate">
                      <Moment format="YYYY/MM/DD"> {dashboard.due} </Moment>
                    </div>
                  </td>
                  <td>
                    
                    {dashboard.dueComplete ? "Completed" : "In Progress"}
                  </td>
                  <td>
                    <div className="members">
                      <MembersComponent cardId={dashboard.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <div className="columns">
          <div className="title column">
            <h1> Kano Academy Dashboard </h1>
          </div>
        </div>
        <div className="header">
          <form className="searchbar">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  name="search"
                  type="text"
                  placeholder="Search by Task Name"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </form>
          <div className="dropdown">
            <div className="dropdown-trigger">
              <select onChange={this.handleViewChange}>
                <option value="card"> Card View </option>
                <option value="table"> Table View </option>
              </select>
            </div>
          </div>
        </div>
        <div className="columns data is-multiline is-centered">
          
          {this.state.view === "card"
            ? this.renderCardView()
            : this.renderTableView()}
        </div>
      </main>
    );
  }
}

export default DashboardComponent;
