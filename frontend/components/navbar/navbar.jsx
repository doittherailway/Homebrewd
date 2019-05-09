import React from 'react';
import { Link } from 'react-router-dom'; //Link welcome message to user profile later

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.currentUser === undefined) {
            return null;
        } else {
            return(
                <div className="navbar">
                    <Link to="/" className="nav-logo">HOMEBREWD</Link>
                    <Link to="/" className="nav-pub">The Pub</Link>
                    <Link to="/beers" className="nav-beers">Beers</Link>
                    <h4>Welcome, <Link to={`/users/${this.props.currentUser.id}`} >{this.props.currentUser.username}!</Link> </h4>
                    <button className="nav-button" onClick={this.props.logout}>Logout</button>
                </div>
            )
        }
    }
}

export default Navbar;