import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);

        
    }

    

    splashMain(){
        if (this.props.location === "/"){
        return(
            <div className="splash-outer">
                <div className="logo-outer">
                    <div className="splash-logo">
                        Homebrewd
                    </div>
                    <div className="splash-ylw">

                    </div>
                    <div className="splash-text">
                        Review and rate homebrew beers.
                    </div>
                </div>
                <div className="splash-phone-container">
                     <img className="splash-phone-img" src={window.images.splash_phone} />
                </div>
            </div>
        )}
        else {
            return(
                null
            );
        }
    }

    render() {
        return(
            // <div className="splash-outer">
                <div className="splash-container">
                    <div className="splash-nav">
                        <Link className="splash-link" to="/login" >Sign In</Link>
                        <Link className="splash-link" to="/signup" >Create an Account</Link>
                    </div>
                    {this.splashMain()}
                </div>
    
            // </div>
        )
    }

}

export default Splash;

