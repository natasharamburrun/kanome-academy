
import React from 'react';
import axios from 'axios';

const DEBUG = true;


class MembersComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/members')
    // axios.get(DEBUG ? 'localhost:4000/board' : '/board/')
      .then(res => {
        this.setState({ members: res.data });
     });
  }

  render() {
		console.log(this.state);
		
   
    return (
      <main>
        <div className="members container">
          <div className="row">
            {this.state.members.map(member => 
              <div key={member.id}>

            
              <div className="col s12 m6">{member.name}</div>
              <div className= "col s12 m5 offset-m1">{member.due}</div>
           </div>
            )}
          {/* <Dashboard widgets={this.state.widgets} layout={this.state.layout} /> */}
          </div>
        </div>
      </main>
    );
  }
}

export default MembersComponent;