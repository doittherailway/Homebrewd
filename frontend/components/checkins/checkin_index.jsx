import React from 'react';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    //checkin type: allCheckins, beerCheckins, userCheckins
    componentDidMount(){
        this.props.fetchRelevantCheckins();
        
    }

    render(){
        if (Object.keys(this.props.checkins).length === 0) { //I think there is checkins sitting in the state which is causing a render before a fetch
            return (null);
        } else {

            

            return(
                <div className="checkin-index-outer">
                    <div className="checkin-index-container">
                        <ul className="checkin-index-ul">
                            {this.props.checkins.map((checkin, i) => {
                                console.log(this.props.beers[checkin.beerId])
                                console.log(this.props.users[checkin.userId])
                                return (<CheckinIndexItem checkin={checkin} beer={this.props.beers[checkin.beerId]} user={this.props.users[checkin.userId]} key={i} />)
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }
    

}

export default CheckinIndex;
