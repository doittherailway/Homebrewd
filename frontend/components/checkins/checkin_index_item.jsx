import React from 'react';

const CheckinIndexItem = (props) => {
    return(
        <li>
            {props.user.name}
            {props.beer.name}
            {props.checkin.description}
            {props.checkin.rating}
        </li>
    )
};

export default CheckinIndexItem;