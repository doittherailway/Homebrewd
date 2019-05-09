import React from 'react';
import CheckinUserIndexContainer from '../checkins/checkin_user_index_container';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    render() {
        if (this.props.user !== undefined){
            
        return(
            <div className="user-profile-top-level-container">
                <div className="user-profile-outer">
                    <div className="user-topbar-container"> 
                        <div className="user-profile-top-photo">
                            <div className="user-profile-circle">
                                <i className="fas fa-user-circle usr-circ"></i>
                            </div>
                        </div>
                        <div className="user-profile-details-box">
                            <div className="user-profile-title-name">
                                <p>{this.props.user.firstName} {this.props.user.lastName}</p>
                            </div>
                            <div className="user-profile-name-loc">
                                <p>{this.props.user.username}</p>
                            </div>
                            <div className="user-profile-stats">
                                <p className="user-stats-number">213</p> <p className="user-stats-text">TOTAL</p><p className="user-stats-number">187</p> <p className="user-stats-text">UNIQUE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CheckinUserIndexContainer userId={this.props.user.id} />
            </div>
        )} else {
            return(null);
        }
    }
}

export default UserProfile;