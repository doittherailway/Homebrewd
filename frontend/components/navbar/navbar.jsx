import React from 'react';
import { Link } from 'react-router-dom'; //Link welcome message to user profile later
import SearchbarContainer from './searchbar_container';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    // $(document).on('click', function (e) {
    //     if ($(e.target).closest("#CONTAINER").length === 0) {
    //         $("#CONTAINER").hide();
    //     }
    // });

    render() {

        if (this.props.currentUser === undefined) {
            return null;
        } else {
            return(
                <div className="navbar">
                    <Link to="/" className="nav-logo">HOMEBREWD</Link>
                    <Link to="/" className="nav-pub">The Pub</Link>
                    <Link to="/beers" className="nav-beers">Beers</Link>
                    <div className="dropdown-outer">
                        <div className="dropdown">
                            <button className="dropbtn"><Link to={`/users/${this.props.currentUser.id}`} ><i className="fas fa-user-circle top-user-circle"></i></Link>
                            </button>
                            <div className="dropdown-content">
                            <Link className="dropdown-link" to={`/users/${this.props.currentUser.id}`}>Profile</Link>
                                <a className="dropdown-link" onClick={this.props.logout}>Logout</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SearchbarContainer />
                    </div>
                </div>

            )
        }
    }
}

export default Navbar;

//<button className="nav-button" onClick={this.props.logout}>Logout</button>
//                     <h4>Welcome, </h4>