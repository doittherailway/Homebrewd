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
        this.demoUserFill = this.demoUserFill.bind(this);
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

    demoUserFill(){
        this.setState({
            username: 'BeerDrinker',
            password: 'password'
        });
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
        if (this.props.errors.session.length > 0) {
            if (this.props.formType === "signup") {
                return (
                    <div className="error-container-s">
                        <ul className="error-ul">
                            {this.props.errors.session.map((err, i) => (
                                <li key={`error-${i}`}>{err}</li>
                            ))}
                        </ul>
                    </div>
                )} else {
                return(
                    <div className="error-container">
                        <ul className="error-ul" >
                            {this.props.errors.session.map((err, i) => (
                                <li key={`error-${i}`}>{err}</li>
                            ))}
                        </ul>
                    </div>
        )}}
        else {
            return(null);
        }
    }

    loginForm() {
        return(
            <div className="outer-form">
                <div className="session-form-container">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {this.formLogo()}
                        {this.renderErrors()}
                        <h3>{this.formHeader()}</h3>
                        <div className="input-box">
                            <i className="fas fa-user"></i>
                            <p><input className="session-form-input" placeholder="Username" type="text" value={this.state.username} onChange={(e) => (this.handleChange('username', e))}></input></p>
                        </div>
                        <div className="input-box">
                            <i className="fas fa-lock"></i>
                            <p><input className="session-form-input" type="password" placeholder="Password" value={this.state.password} onChange={(e) => (this.handleChange('password', e))}></input></p>
                        </div>
                        <input className="session-submit-btn" type="submit" value="Sign In"></input>
                        <button className="demo-login-btn" onClick={this.demoUserFill}>Demo Login</button>
                        <div className="login-hr"></div>
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
                <div className="session-form-container-signup">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {this.formLogo()}
                        {this.renderErrors()}
                        <h3>{this.formHeader()}</h3>
                        <p className="field-text">All fields below are required.</p>
                            <div className="input-box">
                                <i className="fas fa-user"></i>
                                <p><input className="session-form-input" type="text" placeholder="Username" value={this.state.username} onChange={(e) => (this.handleChange('username', e))}></input></p>
                            </div>
                            <div className="input-box">
                                <i className="fas fa-envelope"></i>
                                <p><input className="session-form-input" type="email" placeholder="Email" value={this.state.email} onChange={(e) => (this.handleChange('email', e))}></input></p>
                            </div>   
                        <p className="password-text">Password: minimum 6 characters.</p>  
                        
                               <div className="input-box">
                                <i className="fas fa-lock"></i>
                                <p><input className="session-form-input" type="password" placeholder="Password" value={this.state.password} onChange={(e) => (this.handleChange('password', e))}></input></p>
                                </div>
                        <div className="space-div"></div>             
                            <div className="input-box">
                                <input className="session-form-input-n" type="text" placeholder="First Name" value={this.state.first_name} onChange={(e) => (this.handleChange('first_name', e))}></input>
                            </div>
                            <div className="input-box">
                                <input className="session-form-input-n" type="text" placeholder="Last Name" value={this.state.last_name} onChange={(e) => (this.handleChange('last_name', e))}></input>
                            </div>
                        <div className="space-div"></div>   
                        <input className="session-submit-btn" type="submit" value="Create Account"></input>
                    </form>
                    

                </div>
                <div className="signup-from-login-outer-s">
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
