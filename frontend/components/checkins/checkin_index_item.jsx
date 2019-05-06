import React from 'react';

const CheckinIndexItem = (props) => {

    return(
        <li>
            {props.checkin.user.userName}
            {props.checkin.beer.beerName}
            {props.checkin.description}
            {props.checkin.rating}
        </li>
    )
};

export default CheckinIndexItem;