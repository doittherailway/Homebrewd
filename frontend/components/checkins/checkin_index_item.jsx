import React from 'react';
import { Link } from 'react-router-dom';
import BeerIcon from '../beers/beer_icon';
import CheckinRating from './checkin_rating';
import CheckinExtraDetailsContainer from './checkin_extra_details';
import CheckinPhoto from './checkin_photo';
import { timeDifference } from '../../reducers/selectors';
import CheckinLocation from './checkin_location';

const CheckinIndexItem = (props) => {
    return(
        <li className="checkin-li">
            <div className="checkin-index-item-div">
                <div className="checkin-user-icon">
                    <i className="fas fa-user-circle"></i>
                </div>
                <div className="checkin-index-item-inner">
                    <div className="checkin-item-p"><Link className="checkin-item-link" to={`/users/${props.user.id}`}>{props.user.username}</Link> is drinking a <Link className="checkin-item-link" to={`/beers/${props.beer.id}`} onClick={window.scrollTo(0, 0)}>{props.beer.name}</Link> by {props.brewery.name} <CheckinLocation location={props.checkin.location} /></div>
                    <div className="checkin-desc-box">
                        <p>{props.checkin.description}</p>
                        <div className="checkin-beer-rating-box"><CheckinRating rating={props.checkin.rating} /></div>
                    </div>
                        <CheckinPhoto checkinPhotoUrl={props.checkin.checkinPhotoUrl} />
                    <div className="checkin-bottom-box">
                        <p className="checkin-bottom-date">{timeDifference(props.checkin.createdAt)}</p>
                        <CheckinExtraDetailsContainer checkinUserId={props.checkin.userId} checkinId={props.checkin.id} currentUserId={props.currentUserId} />
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

// <div id={`beerRatingStars-${props.checkin.id}`}></div>