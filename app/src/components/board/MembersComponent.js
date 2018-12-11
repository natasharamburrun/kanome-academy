
import React from 'react';
import axios from 'axios';

const DEBUG = true;


class MembersComponent extends React.Component {
  constructor() {
    super();
    this.state = {
        idCard: "5bbfbc64884cf66f2500581a"
    };
  }

  componentDidMount() {
    console.log(this.state.idCard);
    axios.get('http://localhost:4000/card/' + this.state.idCard)
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