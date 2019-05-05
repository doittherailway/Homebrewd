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
        if (Object.keys(this.props.checkins).length === 0) {
            return (null);
        } else {
            return(
                <div className="checkin-index-outer">
                    <div className="checkin-index-container">
                        <ul className="checkin-index-ul">
                            {this.props.checkins.map((checkin, i) => {
                                return (<CheckinIndexItem checkin={checkin} key={i} />)
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }
    

}

export default CheckinIndex;
