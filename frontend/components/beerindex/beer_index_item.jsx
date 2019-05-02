import React from 'react';
import { Link } from 'react-router-dom';

const BeerIndexItem = (props) => {
    return(
        <li className="beer-index-item">
            <Link to="">
                {props.beer.name}
                {props.beer.brewery}
                {props.beer.description}
                {props.beer.abv}
            </Link>
        </li>
    )
};

export default BeerIndexItem;