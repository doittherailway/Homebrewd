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
                expanded: false
            });
        }
    }

    render () {
        if (this.props.fullDesc.length <= this.props.charCount) {
            return(
                <div className="beer-show-desc-box">
                    <p className="beer-show-desc">{this.props.truncDesc}</p>
                </div>
            )
        } else if (this.state.expanded === false) {
            return(
                <div className="beer-show-desc-box">
                    <p className="beer-show-desc">{this.props.truncDesc}...<a onClick={this.truncateToggle} className="beer-desc-read">Read More</a></p>
                </div>
            )
        } else {
            return(
                <div className="beer-show-desc-box">
                    <p className="beer-show-desc">{this.props.fullDesc}<a onClick={this.truncateToggle} className="beer-desc-read">Read Less</a></p>
                </div>
            )
        }
    }

}

export default BeerDesc;