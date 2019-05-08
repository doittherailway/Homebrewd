import React from 'react';
import { connect } from 'react-redux';

class CheckinModal extends React.Component {
    constructor(props) {
        super(props); // show (t/f), handleClose

        this.state = {
            user_id: this.props.userId,
            beer_id: this.props.beerId,
            description: "",
            rating: 0,
            location: ""
        };

        this.showhideClassname = this.showhideClassname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkinForm = this.checkinForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    showhideClassname() {
        if (this.props.show === true) {
            return "modal checkin-modal-display-on";
        } else {
            return "modal checkin-modal-display-none";
        }
    }


    handleChange(field, e) {
        let val = e.currentTarget.value;
        this.setState({
            [field]: val
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createCheckin(this.state);

        //this.props.handleClose on success
    }

    renderErrors() {
        if (this.props.errors.checkins.length > 0) {
            return (
                <div className="error-container-s">
                    <ul className="error-ul">
                        {this.props.errors.checkins.map((err, i) => (
                            <li key={`error-${i}`}>{err}</li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return (null);
        }
    }

    checkinForm() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="checkin-textarea" value={this.state.description} onChange={(e) => (this.handleChange("description", e))} placeholder="What did you think?"></textarea>
                    <div className="slider-container">
                        <input className="checkin-slider" type="range" min="0" max="5" value={this.state.rating} onChange={(e) => (this.handleChange("rating", e))}></input>
                    </div>
                    <div className="checkin-rating-box">
                        <p>{this.state.rating}</p>
                        <p className="checkin-rating-form-text">STARS</p>
                    </div>
                    <input type="text" className="checkin-location" placeholder="Add your location" value={this.state.location} onChange={(e) => (this.handleChange("location", e))}></input>
                    <button className="checkin-form-submit" type="submit">Confirm</button>
                 </form>   
            </div>
        )
    }


    render(){
        return(
            <div className ="checkin-button-container" >
                <section className="checkin-modal-section">
                <   div className="checkin-modal-top-bar">
                        <p className="checkin-modal-top-text">Check-In</p>
                        <button className="checkin-modal-close-btn" onClick={this.props.handleClose}>
                            x
                        </button>
                    </div>
                    <div className="checkin-form-errors">
                        {this.renderErrors()}
                    </div>
                    <div>
                        {this.checkinForm()}
                    </div>
                </section>
            </div>
        )
    }
}


///// Container for checkin creation dispatch action

import { createCheckin } from '../../actions/checkin_actions';

const mapStateToProps = (state) => ({
    errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
    createCheckin: (checkin) => (dispatch(createCheckin(checkin))),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckinModal);