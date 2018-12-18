import React from 'react';
import axios from 'axios';

// import DashboardComponent from './DashboardComponent';

const DEBUG = true;


class MembersComponent extends React.Component { 
  constructor(props) {
    super(props);
    // console.log(props)
    // this.props = props;
    this.state = {
        card: {}
    };
  }

  componentDidMount() {
    // console.log(this.props.cardId)
    axios.get(`http://localhost:4000/cards/${this.props.cardId}`)
    
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ card: res.data[0] });
        }
     });
  }

  render() {
		console.log(this.state);
		
   
    return (
      
      <main>
        <div>
        <div className="taskName">{this.state.card.fullName}</div>
        </div>
      </main>
    );
  }
}

export default MembersComponent;