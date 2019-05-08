import React from 'react';
import { Link } from 'react-router-dom';

const CheckinExtraDetails = ({currentUserId, checkinId}) => {
    if (currentUserId === checkinId) {
        return (
            <p className="checkin-extra-detail-link" >Delete Check-In</p>
        );
    } else {
        return(null);
    }
    
};

export default CheckinExtraDetails;