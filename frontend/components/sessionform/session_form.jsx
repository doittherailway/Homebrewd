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
        this.linkto = this.linkto.bind(this);
        this.loginForm = this.loginForm.bind(this);
        this.signupForm = this.signupForm.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillUnmount(){
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

    linkto() {
        if (this.props.formType === 'signup') {
            return 'login';
        } else {
            return 'signup';
        }
    }

    renderErrors() {
        return(
            <div>
                <ul>
                    {this.props.errors.session.map(err => (
                        <li>{err}</li>
                    ))}
                </ul>
            </div>
        )
    }

    loginForm() {
        return(
            <div className="session-form">
                <h3>{this.props.formType}</h3>

                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input type="text" value={this.state.username} onChange={(e) => (this.handleChange('username', e))}></input>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={(e) => (this.handleChange('password', e))}></input>
                    </label>
                    <input type="submit" value="submit"></input>
                </form>
                {this.renderErrors()}
                <Link to={`/${this.linkto()}`}>{this.linkto()}</Link>
            </div>
        )    
    }

    signupForm(){
        return(
            <div className="session-form">
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input type="text" value={this.state.username} onChange={(e) => (this.handleChange('username', e))}></input>
                    </label>
                    <label>First Name
                        <input type="text" value={this.state.first_name} onChange={(e) => (this.handleChange('first_name', e))}></input>
                    </label>
                    <label>Last Name
                        <input type="text" value={this.state.last_name} onChange={(e) => (this.handleChange('last_name', e))}></input>
                    </label>
                    <label>Email
                        <input type="email" value={this.state.email} onChange={(e) => (this.handleChange('email', e))}></input>
                    </label>
                    <label>Password (minimum 6 characters)
                        <input type="password" value={this.state.password} onChange={(e) => (this.handleChange('password', e))}></input>
                    </label>
                    <input type="submit" value="submit"></input>
                </form>
                {this.renderErrors()}
                <Link to={`/${this.linkto()}`}>{this.linkto()}</Link>
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
