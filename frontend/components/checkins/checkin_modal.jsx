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

    checkinForm() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="checkin-textarea" value={this.state.description} onChange={(e) => (this.handleChange("description", e))} placeholder="What did you think?"></textarea>
                    <input type="range" min="0" max="5" value={this.state.rating} onChange={(e) => (this.handleChange("rating", e))}></input>
                    <input type="text" className="checkin-location" value={this.state.location} onChange={(e) => (this.handleChange("location", e))}></input>
                    <button type="submit">Confirm</button>
                 </form>   
            </div>
        )
    }


    render(){
        return(
            <div className={this.showhideClassname()}>
                <section className="checkin-modal-section">
                    <button onClick={this.props.handleClose}>
                        close
                    </button>
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

const mapDispatchToProps = (dispatch) => ({
    createCheckin: (checkin) => (dispatch(createCheckin(checkin))),
});

export default connect(null, mapDispatchToProps)(CheckinModal);