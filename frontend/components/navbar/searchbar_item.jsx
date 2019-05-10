import React from 'react';
import { Link } from 'react-router-dom';

// const searchLiClick = (link) => {
//     return(
        
//     )
// }

const SearchBarItem = (props) => {
    
    return(
        <li className="searchbar-item-li">
            <Link to={`/beers/${props.result.id}`} className="searchbar-item-p">{props.result.name}   </Link>
        </li>
    )
};

export default SearchBarItem;