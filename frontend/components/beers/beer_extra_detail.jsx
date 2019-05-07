import React from 'react';

const BeerExtraDetail = (props) => {

    return(
        <div className="beer-extra-details">
            <p>{props.beer.abv}% ABV</p>
            <p><i className="fas fa-certificate cert-ylw"></i><i className="fas fa-certificate cert-ylw"></i><i className="fas fa-certificate cert-ylw"></i><i className="fas fa-certificate cert-ylw"></i><i className="fas fa-certificate"></i> (4)</p>
            <p> {Math.floor(Math.random() * 700) + 1} Ratings</p>
            <p>Added {props.beer.createdAt}</p>
        </div>
    );
};

export default BeerExtraDetail;