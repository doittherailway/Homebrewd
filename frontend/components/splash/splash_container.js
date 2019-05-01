import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state, ownProps) => {
    return(
    {
        location: ownProps.location.pathname
    })
};

const mapDispatchToProps = (dispatch) => ({
    login: user => (dispatch(login(user))),
    signup: user => (dispatch(signup(user)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);