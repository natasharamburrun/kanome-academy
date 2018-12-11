
import React from 'react';
import axios from 'axios';

const DEBUG = true;


class MembersComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get('http://localhost:4000/card/${this.props.match.params.id}')
      .then(res => {
        this.setState({ card: res.data });
     });
  }

  

  render() {
		console.log(this.state);
		
   
    return (
      <main>
        <div className="">
        </div>
      </main>
    );
  }
}

export default MembersComponent;