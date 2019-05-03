import React from 'react';
import BeerExtraDetail from './beer_extra_detail'
import BeerIcon from './beer_icon';
import BeerDesc from './beer_desc';

class BeerShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchBeer(this.props.beerId);
    }

 

    render() {
        if (this.props.beer !== undefined && this.props.beer.name !== undefined) {
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
                            <BeerDesc fullDesc={this.props.beer.description} truncDesc={this.props.beer.truncDescShort} charCount={84} />
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