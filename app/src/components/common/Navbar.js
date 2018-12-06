import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Navbar extends React.Component {


render() {
    return (
      <nav className>
        <main> 
          <h1>Kano Academy Dashboard</h1>
        </main>
      </nav>
    );
  };

}
export default withRouter(Navbar);