import React from 'react';
import { Link } from 'react-router-dom'; //Link welcome message to user profile later

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="navbar">
                <h2 className="nav-logo">HOMEBREWD</h2>
                <h4>Welcome, {this.props.currentUser.username}! </h4>
                <button className="nav-button" onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default Navbar;