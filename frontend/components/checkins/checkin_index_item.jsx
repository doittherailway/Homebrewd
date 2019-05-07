import React from 'react';
import { Link } from 'react-router-dom';
import BeerIcon from '../beers/beer_icon';

const CheckinIndexItem = (props) => {


    return(
        <li className="checkin-li">
            <div className="checkin-index-item-div">
                <div className="checkin-user-icon">
                    <i className="fas fa-user-circle"></i>
                </div>
                <div className="checkin-index-item-inner">
                    <p className="checkin-item-p"><Link className="checkin-item-link" to="">{props.user.username}</Link> is drinking a <Link className="checkin-item-link" to={`/beers/${props.beer.id}`}>{props.beer.name}</Link> by [brewery]</p>
                    <div className="checkin-desc-box">
                        <p>{props.checkin.description}</p>
                        <p>{props.checkin.rating}/5</p>
                    </div>
                    <div className="checkin-photo-box">

                    </div>
                </div>
                <div className="checkin-beer-icon">
                    <BeerIcon beerPhotoUrl={props.beer.beerPhotoUrl} src="checkin"/>
                </div>
            </div>
        </li>
    )
};

export default CheckinIndexItem;