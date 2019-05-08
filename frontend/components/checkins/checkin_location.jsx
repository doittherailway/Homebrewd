import React from 'react';

const CheckinLocation = ({ location }) => {
    if (location !== "" && location !== null) {
        return(
            <>
                at <p className="location-name-checkin">{location}</p>
            </>
        )
    } else {
        return(null);
    }
};

export default CheckinLocation;