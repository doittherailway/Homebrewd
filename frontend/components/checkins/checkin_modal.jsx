import React from 'react';

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
    }

    showhideClassname() {
        if (this.props.show === true) {
            return "modal checkin-modal-display-on";
        } else {
            return "modal checkin-modal-display-none";
        }
    }

    handleSubmit(){
        e.preventDefault();
        //submit action from props
    }

    checkinForm() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.description} placeholder="What did you think?"></textarea>
                    <input type="text" value={this.state.rating}></input>
                    <input type="text" value={this.state.location}></input>
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

export default CheckinModal;