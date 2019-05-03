import React from 'react';
import BeerExtraDetail from './beer_extra_detail'
import BeerIcon from './beer_icon';

class BeerShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchBeer(this.props.beerId);
    }

    render() {
        if (this.props.beer !== undefined) {
            return(
                <div className="beer-bg">
                    <div className="beer-show-outer">
                        <div className="beer-content">
                            <div className="beer-index-outer">
                                <div className="beer-index-item">
                                    <BeerIcon beerType={this.props.beer.beerType} />
                                    <div className="beer-details-show">
                                        <p className="beer-title-show">{this.props.beer.name}</p>
                                        <p className="beer-brewery-show">{this.props.beer.brewery}</p>
                                        <p className="beer-type-show">{this.props.beer.beerType}</p>  
                                    </div>
                                    <BeerExtraDetail beer={this.props.beer} />
                                </div>   
                            </div>
                            <div className="beer-show-desc-box">
                                <p className="beer-show-desc">{this.props.beer.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                null   //add loading icon here
            )
        }

    }

}

export default BeerShow;