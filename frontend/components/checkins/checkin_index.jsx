import React from 'react';
import CheckinIndexItem from './checkin_index_item';
import { sortByLatest } from '../../reducers/selectors';

class CheckinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    //checkin type: allCheckins, beerCheckins, userCheckins
    componentDidMount(){
        this.props.fetchRelevantCheckins();
        // this.addBeerRatingStars();
        
    }

    render(){
        if (Object.keys(this.props.checkins).length === 0) { //I think there is checkins sitting in the state which is causing a render before a fetch
            return (null);
        } else {
            let sortedCheckins = sortByLatest(this.props.checkins);
            //sort checkins here

            return(
                <div className="checkin-index-outer">
                    <div className="checkin-index-container">
                        <div className="checkin-title-div">
                            <p className="checkin-title-p">Recent Activity</p>
                        </div>
                        <ul className="checkin-index-ul">
                            {sortedCheckins.map((checkin, i) => {
                                return (<CheckinIndexItem checkin={checkin} beer={this.props.beers[checkin.beerId]} user={this.props.users[checkin.userId]} currentUserId={this.props.currentUserId} key={i} />)
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
