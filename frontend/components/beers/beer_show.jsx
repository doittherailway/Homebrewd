import React from 'react';
import BeerExtraDetail from './beer_extra_detail'

class BeerShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchBeer(this.props.beerId);
    }

    render() {
                    // top level div can have same class as index item
        return(
            <div> 
                <div>
                    {this.props.beer.name}
                    {this.props.beer.brewery}  
                </div>
                <BeerExtraDetail beer={this.props.beer} />
            </div>
        );
    }

}

export default BeerShow;