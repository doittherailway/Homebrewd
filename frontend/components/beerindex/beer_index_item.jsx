import React from 'react';
import { Link } from 'react-router-dom';

const BeerIndexItem = (props) => {
    return(
        <li className="beer-index-item">
            <div className="beer-img">
                <i className="fas fa-beer"></i>
            </div>
            <div className="beer-details">
                <Link className="beer-title" to={`/beers/${props.beer.id}`}>
                    {props.beer.name}
                </Link>
            
                <p className="beer-brewery">{props.beer.brewery}</p>
                <p className="beer-type">{props.beer.beerType}</p>
                <p className="beer-desc">{props.beer.description}</p>
            </div>
            <div className="beer-extra-details">
                <p>{props.beer.abv}% ABV</p>
                <p>Added {props.beer.createdAt}</p>
            </div>
        </li>
    )
};

export default BeerIndexItem;