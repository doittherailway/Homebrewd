import React from 'react';
import CheckinModal from './checkin_modal';
import CheckinBackgroundModal from './checkin_background_modal';

class CheckinButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.showhideClassname = this.showhideClassname.bind(this);
    }

    showModal() {
        this.setState({
            show: true
        });
    }

    hideModal() {
        this.setState({
            show: false
        });
    }

    showhideClassname() {
        if (this.state.show === true) {
            return "modal checkin-modal-display-on";
        } else {
            return "modal checkin-modal-display-none";
        }
    }

    render() {

        return (
            <div>
                <div className={this.showhideClassname()} > 
                    <CheckinBackgroundModal handleClose={this.hideModal}></CheckinBackgroundModal>
                    <CheckinModal show={this.state.show} handleClose={this.hideModal} beerId={this.props.beerId} userId={this.props.userId} />
                </div>
                <button className="checkin-button" title="Check-in this Beer" onClick={this.showModal} >
                    <i className="fas fa-check"></i>
                </button>
            </div>
        )
    }
}

export default CheckinButton;

////className="checkin-button-container"

