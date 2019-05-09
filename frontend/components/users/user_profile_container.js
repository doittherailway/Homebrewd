import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
    let userId = ownProps.match.params.userId;
    let user = state.entities.users[userId]; 
    return({
        userId: userId,
        user: user
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => (dispatch(fetchUser(userId)))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);