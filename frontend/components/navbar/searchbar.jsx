import React from 'react';
import { searchDebounce } from '../../reducers/selectors';
import SearchBarItem from './searchbar_item';

Function.prototype.myDebounce = function (interval) {
    let timeout;
    return (...args) => {
        const fnCall = () => {
            timeout = null;
            this(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, interval);
    };
};
// https://github.com/appacademy/curriculum/blob/master/javascript/projects/functions_exercises/solution/throttleAndDebounce.js

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            value: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this).myDebounce(500);
        this.handleChange = this.handleChange.bind(this);
        this.beerOptions = this.beerOptions.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }

    beerOptions() {
        let dataList = document.getElementById('beer-list-res');
        let input = document.getElementById('search-input');

        this.props.results.forEach((beer, index) => {
            var option = document.createElement('option');
            option.value = beer;
            dataList.appendChild(option);
        });
        input.placeholder = "Find a beer...";
    }

    handleChange(e) {
        let val = e.currentTarget.value;
        this.setState({
            value: val,
            query: val
        }, this.handleSubmit);
    }

    handleSubmit() {
        this.props.fetchResults(this.state.query);
        this.setState({
            val: ""
        });
    }

    resetSearch() {
        this.props.fetchResults("");
        this.setState({
            val: ""
        });
    }

    render() {
        return(
            <div>
                <div className="searchbar-input-container">
                    <input className="searchbar-input" onChange={this.handleChange} value={this.state.value} placeholder="Find a beer..."></input><p className="search-magnify"><i className="fas fa-search"></i></p>
                    <div className="searchbar-dropdown">
                        <ul className="searchbar-ul" onClick={this.resetSearch}>
                            {this.props.results.map((result, i) => {
                                return (
                                    <SearchBarItem result={result} key={i} />
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        )} 
}

export default SearchBar;

//   {sortedCheckins.map((checkin, i) => {
// return (<CheckinIndexItem checkin={checkin} beer={this.props.beers[checkin.beerId]} user={this.props.users[checkin.userId]} currentUserId={this.props.currentUserId} brewery={this.props.breweries[this.props.beers[checkin.beerId].breweryId]} key={i} />)
//                             })}

// return (
//     <div>
//         <div className="searchbar-input-container">
//             <input className="searchbar-input" onChange={this.handleChange} placeholder="Find a beer..."></input><p className="search-magnify"><i className="fas fa-search"></i></p>
//         </div>
//         <div className="searchbar-dropdown">
//             <ul className="searchbar-ul">
//                 {this.props.results.map((result, i) => {
//                     return (
//                         <SearchBarItem result={result} key={i} />
//                     )
//                 })}
//             </ul>
//         </div>
//     </div>
// )} 