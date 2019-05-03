import React from 'react';
import { Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';

class BeerIndex extends React.Component {

    componentDidMount(){
        this.props.fetchBeers();
    }

    render() {
        if (Object.keys(this.props.beers).length === 0) {
            return(
                null
            );
        } else {
            return(
                <div className="beer-content">
                    <div className="beer-index-title">
                        All Beers
                    </div>
                    <div className="beer-index-outer"> 
                        <div>
                            <ul className="beer-index-ul">
                                {this.props.beers.map((beer, i) => {
                                    return(<BeerIndexItem { ...beer } key={i} />)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default BeerIndex;