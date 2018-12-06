
import React from 'react';
import axios from 'axios';

const DEBUG = true;


class Dashboard extends React.Component {

  state = {}

  componentDidMount() {
    axios.get('http://localhost:4000/board')
    // axios.get(DEBUG ? 'localhost:4000/board' : '/board/')
			.then(res => {console.log(res); this.setState({ dashboard: res.data })} );
  }


  render() {
		console.log(this.state);
		
   
    return (
      <main>

      </main>
    );
  }
}

export default Dashboard;