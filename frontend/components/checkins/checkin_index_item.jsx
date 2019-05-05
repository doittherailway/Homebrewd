import React from 'react';

const CheckinIndexItem = (props) => {

    return(
        <li>
            {props.checkin.userName}
            {props.checkin.beerName}
            {props.checkin.description}
            {props.checkin.rating}
        </li>
    )
};

export default CheckinIndexItem;