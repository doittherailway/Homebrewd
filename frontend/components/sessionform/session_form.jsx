import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.formHeader = this.formHeader.bind(this);
        this.loginForm = this.loginForm.bind(this);
        this.signupForm = this.signupForm.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentDidMount(){
        this.props.receiveErrors([]);
    }

    handleChange(field, e) {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    formLogo() {
        return(
            <div className="form-logo">
                Homebrewd
            </div>
        )
    }

    formHeader() { 
        if (this.props.formType === 'signup') {
            return 'Create an account'; 
        } else {
            return 'Returning user login';
        }
    }

    renderErrors() {
        return(
            <div className="error-container">
                <ul>
                    {this.props.errors.session.map((err, i) => (
                        <li key={`error-${i}`}>{err}</li>
                    ))}
                </ul>
            </div>
        )
    }

    loginForm() {
        return(
            <div className="outer-form">
                <div className="session-form-container">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {this.formLogo()}
                        <h3>{this.formHeader()}</h3>
                        <label>Username
                            <input className="session-form-input" type="text" value={this.state.username} onChange={(e) => (this.handleChange('username', e))}></input>
                        </label>
                        <label>Password
                            <input className="session-form-input" type="password" value={this.state.password} onChange={(e) => (this.handleChange('password', e))}></input>
                        </label>
                        <input className="session-submit-btn" type="submit" value="Sign In"></input>
                        {this.renderErrors()}
                    </form>
                    
                </div>
                <div className="signup-from-login-outer">
                    <div className="signup-from-login">
                        New around here? <Link className="signup-login-link" to="/signup">Sign Up!</Link>
                    </div>
                </div>
            </div>
        )    
    }

    signupForm(){
        return(
            <div className="outer-form">
                <div className="session-form-container">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {this.formLogo()}
                        <h3>{this.formHeader()}</h3>
                        <label>Username
                            <input className="session-form-input" type="text" value={this.state.username} onChange={(e) => (this.handleChange('username', e))}></input>
                        </label>
                        <label>First Name
                            <input className="session-form-input" type="text" value={this.state.first_name} onChange={(e) => (this.handleChange('first_name', e))}></input>
                        </label>
                        <label>Last Name
                            <input className="session-form-input" type="text" value={this.state.last_name} onChange={(e) => (this.handleChange('last_name', e))}></input>
                        </label>
                        <label>Email
                            <input className="session-form-input" type="email" value={this.state.email} onChange={(e) => (this.handleChange('email', e))}></input>
                        </label>
                        <label>Password
                            <input className="session-form-input" type="password" value={this.state.password} onChange={(e) => (this.handleChange('password', e))}></input>
                        </label>
                        <input className="session-submit-btn" type="submit" value={this.props.formType}></input>
                        {this.renderErrors()}
                    </form>
                    

                </div>
                <div className="signup-from-login-outer">
                    <div className="signup-from-login">
                        Already have an account? <Link className="signup-login-link" to="/login">Login here!</Link>
                    </div>
                </div>
            </div>
        )
    }


    render() {
        if (this.props.formType === 'login') {
            return this.loginForm()
        } else {
            return this.signupForm()
        }
        
    }

}

export default SessionForm;
