import React from 'react';

const CheckinRating = ({ rating }) => {
    //props.rating = 0-5
    switch(rating) {
        case 0:
            return (<p><i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i></p>);
        case 1:
            return (<p><i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i></p> );
        case 2:
            return (<p><i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i></p> );
        case 3:
            return (<p><i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate"></i> <i className="fas fa-certificate"></i></p> );
        case 4:
            return (<p><i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate"></i></p> );
        case 5:
            return (<p><i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate cert-ylw"></i> <i className="fas fa-certificate-ylw"></i></p> );
        default:
            return null;
    }

};

export default CheckinRating;

