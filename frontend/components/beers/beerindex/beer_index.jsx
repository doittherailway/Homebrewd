import React from 'react';
import { Link } from 'react-router-dom';
import BeerIndexItem from './beer_index_item';

class BeerIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fetchDone: false
        }
    }

    componentDidMount(){
        this.props.fetchBeers()
            .then((action) => {
                if (action.type === "RECEIVE_ALL_BEERS") {
                    this.setState({
                        fetchDone: true
                    })
                }
            });
    }

    render() {
        if (this.state.fetchDone == false) {
            return(
                <div className="loading-spinner-box">
                    <div className="loading-spinner">
                        <img src={window.images.loading_spinner} />
                    </div>
                </div>
            );
        } else {
            return(
                <div className="beer-bg">
                    <div className="beer-content">
                        <div className="beer-index-title">
                            All Beers
                        </div>
                        <div className="beer-index-outer"> 
                            <div>
                                <ul className="beer-index-ul">
                                    {this.props.beers.map((beer, i) => {
                                        return(<BeerIndexItem beer={beer} brewery={this.props.breweries[beer.breweryId]} key={i} />)
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="beer-index-end"></div>
                        <div className="beer-index-add-container">
                            <div className="beer-index-add">
                                    <p>Don't see the beer you're looking for?</p>
                                    <Link className="beer-index-add-link" to="/beers/new">You can add it here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default BeerIndex;

//Object.keys(this.props.beers).length === 0)