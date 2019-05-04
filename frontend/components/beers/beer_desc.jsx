import React from 'react';

class BeerDesc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.truncateToggle = this.truncateToggle.bind(this);
    }

    truncateToggle() {
        if (this.state.expanded === true) {
            this.setState({
                expanded: false
            });
        }
        else {
            this.setState({
                expanded: true
            });
        }
    }


    render () {
        if (this.props.fullDesc.length <= this.props.charCount) {
            return(   
                    <p className="beer-show-desc">{this.props.truncDesc}</p>
            )
        } else if (this.state.expanded === false) {
            return(
                    <p className="beer-show-desc">{this.props.truncDesc} ...<a onClick={this.truncateToggle} className="beer-desc-read">Read More</a></p>
            )
        } else {
            return(
                    <p className="beer-show-desc">{this.props.fullDesc}<a onClick={this.truncateToggle} className="beer-desc-read"> Read Less</a></p>
            )
        }
    }

}

export default BeerDesc;