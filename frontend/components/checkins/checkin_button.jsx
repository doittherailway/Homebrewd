import React from 'react';
import CheckinModal from './checkin_modal';

class CheckinButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
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

    render() {

        return (
            <div className="checkin-button-container">
                <CheckinModal show={this.state.show} handleClose={this.hideModal} beerId={this.props.beerId} userId={this.props.userId}>
                </CheckinModal>
                <button className="checkin-button" title="Check-in this Beer" onClick={this.showModal} >
                    <i className="fas fa-check"></i>
                </button>
            </div>
        )
    }
}

export default CheckinButton;