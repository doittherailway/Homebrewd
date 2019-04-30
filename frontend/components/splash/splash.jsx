import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="splash-nav">
                <Link to="/login" >Login</Link>
                <Link to="/signup" >Sign Up</Link>
            </div>
        )
    }

}

export default Splash;