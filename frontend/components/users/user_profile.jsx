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
            <div>
                <div className="user-topbar-container">
                    <div className="user-profile-top-photo">profilephoto</div>
                    <div className="user-profile-details-box">
                        <div className="user-profile-title-name">
                            <p>{this.props.user.firstName} {this.props.user.lastName}</p>
                        </div>
                        <div className="user-profile-name-loc">
                            <p>{this.props.user.username}</p>
                        </div>
                        <div className="user-profile-stats">
                            <p>213 TOTAL</p>
                            <p>187 UNIQUE</p>
                        </div>
                    </div>
                </div>
                <CheckinUserIndexContainer userId={this.props.user.id}/>
            </div>
        )} else {
            return(null);
        }
    }
}

export default UserProfile;