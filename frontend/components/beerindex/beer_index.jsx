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
                <div className="beer-index-outer">
                    <div>
                        All Beers
                    </div>
                    <div>
                        <ul>
                            {this.props.beers.map((beer, i) => {
                                return(<BeerIndexItem { ...beer } key={i} />)
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }

}

export default BeerIndex;