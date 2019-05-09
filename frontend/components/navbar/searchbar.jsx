import React from 'react';
import { searchDebounce } from '../../reducers/selectors';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };

        this.handleChange = this.handleChange.bind(this);
       
        
    }

    // debounceHandleChange() {
    //     debounce(this.handleChange, 500);
    // }

    componentDidMount(){
        
    }

    handleChange(e) {
        let val = e.currentTarget.value;
        this.setState({
            query: val
        });
        //debouncer
        this.fetchSearchResults(this.state.query);
    }

    render() {
        return(
            <div>
                <div className="searchbar-input-container">
                    <input className="searchbar-input" onChange={this.handleChange} placeholder="Find a beer..."></input><p className="search-magnify"></p>
                </div>
                Results: 
                <ul>
                {this.props.results.map((result, i) => {
                    return(
                        <li key={i}>{result.name}</li>
                    )
                })}
                </ul>
            </div>
        )} 
}

export default SearchBar;

//   {sortedCheckins.map((checkin, i) => {
// return (<CheckinIndexItem checkin={checkin} beer={this.props.beers[checkin.beerId]} user={this.props.users[checkin.userId]} currentUserId={this.props.currentUserId} brewery={this.props.breweries[this.props.beers[checkin.beerId].breweryId]} key={i} />)
//                             })}