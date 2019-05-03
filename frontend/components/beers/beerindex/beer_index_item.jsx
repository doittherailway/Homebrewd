import React from 'react';
import { Link } from 'react-router-dom';
import BeerExtraDetail from '../beer_extra_detail';
import BeerIcon from '../beer_icon';

const BeerIndexItem = (props) => {
    return(
        <li className="beer-index-item">
            <BeerIcon beerType={props.beer.beerType} />
            <div className="beer-details">
                <Link className="beer-title" to={`/beers/${props.beer.id}`}>
                    {props.beer.name}
                </Link>
            
                <p className="beer-brewery">{props.beer.brewery}</p>
                <p className="beer-type">{props.beer.beerType}</p>
                <p className="beer-desc">{props.beer.description}</p>
            </div>
            <BeerExtraDetail beer={props.beer} />
        </li>
    )
};

export default BeerIndexItem;