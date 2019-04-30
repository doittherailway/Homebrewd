import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state) => ({
    // what to put in here?
});

const mapDispatchToProps = (dispatch) => ({
    login: user => (dispatch(login(user))),
    signup: user => (dispatch(signup(user)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);