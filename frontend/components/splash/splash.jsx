import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="splash-container">
                <div className="splash-nav">
                    <Link className="splash-link" to="/login" >Sign In</Link>
                    <Link className="splash-link" to="/signup" >Create an Account</Link>
                </div>
            </div>
        )
    }

}

export default Splash;