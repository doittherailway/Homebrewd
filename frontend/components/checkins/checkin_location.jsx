import React from 'react';

const CheckinLocation = ({ location }) => {
    if (location !== "" && location !== null) {
        return(
            <>
                at {location}
            </>
        )
    } else {
        return(null);
    }
};

export default CheckinLocation;

//at <p className="location-name-checkin">{location}</p>