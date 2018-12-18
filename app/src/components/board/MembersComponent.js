import React from 'react';
import axios from 'axios';

const DEBUG = true;


class MembersComponent extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
        card: {}
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/cards/${this.props.cardId}`)
      .then(res => {
        if (res.data.length > 0) {
          this.setState({ card: res.data[0] });
        } 
     });
  }

  render() {		
    return (    
      <main>
        <div className="cardname">{this.state.card.fullName}</div>
      </main>
    );
  }
}

export default MembersComponent;