import React from 'react';
import { Link } from 'react-router-dom';

const CheckinIndexItem = (props) => {


    return(
        <li>
            <div className="checkin-index-item-div">
                <p className="checkin-item-p"><Link className="checkin-item-link" to="">{props.user.username}</Link> is drinking a <Link className="checkin-item-link" to={`/beers/${props.beer.id}`}>{props.beer.name}</Link> by [brewery]</p>
                <div className="checkin-desc-box">
                    <p>{props.checkin.description}</p>
                    <p>{props.checkin.rating}/5</p>
                </div>
            </div>
        </li>
    )
};

export default CheckinIndexItem;