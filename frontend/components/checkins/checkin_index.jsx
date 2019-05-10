import React from 'react';
import CheckinIndexItem from './checkin_index_item';
import { sortByLatest } from '../../reducers/selectors';

class CheckinIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetched: false
        };
    }

    //checkin type: allCheckins, beerCheckins, userCheckins
    componentDidMount(){
        this.props.fetchRelevantCheckins()
        .then(() => {
            this.setState({
                fetched: true
            })
        })
        // this.addBeerRatingStars();
        
    }

    // componentDidUpdate(oldProps) {
    //     if (this.props.indexType === "Beer") {
    //         if (this.props.beerId !== oldProps.beerId) {
    //             this.props.fetchRelevantCheckins();
    //         }} else if (this.props.indexType === "User") {
    //             if (this.props.userId !== oldProps.userId) {
    //                 this.props.fetchRelevantCheckins();
    //     }}
    // }

    render(){
        // if (Object.keys(this.props.checkins).length === 0 || Object.keys(this.props.breweries).length === 0) { //|| this.props.breweries === undefined
        //     return (null);
        // else if (this.props.userId !== undefined && this.props.checkins[0].userId === this.props.userId) {
        //     return(null)
        // }
        if (Object.keys(this.props.breweries).length === 0 || Object.keys(this.props.checkins).length === 0) {
                return(
                <div className="loading-spinner-box">
                    <div className="loading-spinner">
                        <img src={window.images.loading_spinner} />
                    </div>
                </div>)
        // } else if (this.props.indexType === "User" && this.props.checkins[0].userId !== this.props.userId || this.props.breweries === undefined) {
        //     return(null)
        // } else if (this.props.indexType === "Beer" && this.props.beers === undefined || this.props.breweries === undefined) {
        //     return(null)
        // }
        }
        else {
            let sortedCheckins = sortByLatest(this.props.checkins);
            return(
                <div className="checkin-index-outer">
                    <div className="checkin-index-container">
                        <div className="checkin-title-div">
                            <p className="checkin-title-p">Recent Activity</p>
                        </div>
                        <ul className="checkin-index-ul">
                            {sortedCheckins.map((checkin, i) => {
                                return (<CheckinIndexItem checkin={checkin} beer={this.props.beers[checkin.beerId]} user={this.props.users[checkin.userId]} currentUserId={this.props.currentUserId} brewery={this.props.breweries[this.props.beers[checkin.beerId].breweryId]} key={i} />)
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }
    
    // addBeerRatingStars(){
    //     Object.keys(this.props.checkins).forEach((checkin) => {
    //         let stars = document.getElementById(`beerRatingStars-${checkin.id}`);
    //         let fragment = document.createDocumentFragment();
    //         let rating = checkin.rating;
    //         for (let i = 0; i < 5; i++) {
    //             let star = document.createElement('i');
    //             if (i < rating) {
    //                 star.className = "fas fa-certificate cert-ylw";
    //             } else {
    //                 star.className = "fas fa-certificate";
    //             }
    //             fragment.appendChild(star);
    //         }
    //         stars.appendChild(fragment);
    //     });
    // }   

}

export default CheckinIndex;
