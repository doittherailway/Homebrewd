import React from 'react';

const BeerExtraDetail = (props) => {

    return(
        <div className="beer-extra-details">
            <p>{props.beer.abv}% ABV</p>
            <p>Added {props.beer.createdAt}</p>
        </div>
    );
};

export default BeerExtraDetail;