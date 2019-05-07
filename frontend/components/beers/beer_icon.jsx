import React from 'react';

const BeerIcon = (props) => {

    // set className according to beerType to change color
    if (props.src === "beer-show") {
        if (props.beerPhotoUrl !== "") {
            return (
                <div className="beer-img">
                    <img className="beer-img-photo" src={props.beerPhotoUrl}></img>
                </div>
            )
        } else {
            return (
                <div className="beer-img">
                    <i className="fas fa-beer"></i>
                </div>
            );
        }
    } else {
        if (props.beerPhotoUrl !== "") {
            return (
                <div className="checkin-beer-img">
                    <img className="beer-checkin-photo" src={props.beerPhotoUrl}></img>
                </div>
            )
        } else {
            return (
                <div className="checkin-beer-img">
                    <i className="fas fa-beer"></i>
                </div>
            );
        }
    }


    
};

export default BeerIcon;