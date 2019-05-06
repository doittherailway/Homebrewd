import React from 'react';
import BeerExtraDetail from './beer_extra_detail'
import BeerIcon from './beer_icon';
import BeerDesc from './beer_desc';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import CheckinBeerIndexContainer from '../checkins/checkin_beer_index_container';
import CheckinButton from '../checkins/checkin_button';

class BeerShow extends React.Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.props.fetchBeer(this.props.beerId);
    }

    handleDelete(){
        let result = confirm("Are you sure you wish to delete this beer?");
        if (result){
            this.props.deleteBeer(this.props.beer.id);
            this.props.history.push(`/beers`);
        }
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
                            <div className="beer-show-desc-box"> 
                                <div className="beer-show-desc-left"></div>
                                <BeerDesc fullDesc={this.props.beer.description} charCount={84} />
                                <CheckinButton userId={this.props.userId} beerId={this.props.beerId} />
                            </div>
                            <div className="beer-show-line-outer">
                                <div className="beer-show-line"></div>
                            </div>
                            <div className="beer-show-edit">
                                <Link to={`/beers/${this.props.beer.id}/edit`} className="beer-show-edit-link">Propose Edit</Link>
                                <a className="delete-beer" onClick={this.handleDelete}>Delete Beer</a>
                            </div>
                        </div>
                    </div>
                    <div className="checkin-container-beer"> 
                        <CheckinBeerIndexContainer beerId={this.props.beer.id} />
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

export default withRouter(BeerShow);