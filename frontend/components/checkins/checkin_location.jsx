import React from 'react';

const CheckinLocation = ({ location }) => {
    if (location !== "") {
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