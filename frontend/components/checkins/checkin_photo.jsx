import React from 'react';

const CheckinPhoto = (props) => {
    if (props.checkinPhotoUrl !== "") {
        return (
            <div className="checkin-photo-box">
                <img className="checkin-img-photo" src={props.checkinPhotoUrl}></img>
            </div>
        )
    } else {
        return (
            null
        );
    }
};

export default CheckinPhoto;