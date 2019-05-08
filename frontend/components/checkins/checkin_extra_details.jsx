import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCheckin } from '../../actions/checkin_actions';

export const CheckinExtraDetails = ({currentUserId, checkinUserId, checkinId, deleteCheckin}) => {
    if (currentUserId === checkinUserId) {

        const handleDelete = () => {
            let result = confirm("Are you sure you wish to delete this beer?");
            if (result) {
                deleteCheckin(checkinId);
                // this.props.history.push(`/beers`); //window.scroll on .then
            }
        };

        return (
            <p className="checkin-extra-detail-link" onClick={handleDelete}>Delete Check-In</p>
        );
    } else {
        return(null);
    }
    
};

// export default CheckinExtraDetails;

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteCheckin: (checkinId) => (dispatch(deleteCheckin(checkinId)))
});

export default connect(null, mapDispatchToProps)(CheckinExtraDetails);
