import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        errors: state.errors,
        formType: 'signup'
    });
};

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => (dispatch(signup(user))),
    receiveErrors: (errors) => (dispatch(receiveErrors(errors)))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);