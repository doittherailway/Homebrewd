import React from 'react';
import { Link } from 'react-router-dom';
import BeerExtraDetail from '../beer_extra_detail';
import BeerIcon from '../beer_icon';
import BeerDesc from '../beer_desc';

const BeerIndexItem = (props) => {
    return(
        <li className="beer-index-item">
            <BeerIcon beerPhotoUrl={props.beer.beerPhotoUrl} />
            <div className="beer-details">
                <Link className="beer-title" to={`/beers/${props.beer.id}`}>
                    {props.beer.name}
                </Link>
            
                <p className="beer-brewery">{props.beer.brewery}</p>
                <p className="beer-type">{props.beer.beerType}</p>
                <BeerDesc fullDesc={props.beer.description} charCount={150} />
            </div>
            <BeerExtraDetail beer={props.beer} />
        </li>
    )
};

export default BeerIndexItem;