import React from 'react';

class BeerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props;
        this.renderErrors = this.renderErrors.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBeer(this.state.beer);
    }

    handleChange(field, e) {
        this.setState({
            beer: {
                [field]: e.currentTarget.value
            }
        });
    }

    renderErrors() {
        if (this.props.errors.beers.length > 0) {
            return (
                <div className="error-container-s">
                    <ul className="error-ul">
                        {this.props.errors.session.map((err, i) => (
                            <li key={`error-${i}`}>{err}</li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return(null);
        }
    }
    componentDidMount(){
        if (this.props.formType === 'Edit') {
            this.props.fetchBeer(this.props.beerId);
        }
    }

    render() {
        if (this.props.formType === 'Edit' && this.props.beer === undefined) {
            return(null);
        } else if (0 === 1) {
            return (null); //placeholder
        } else {
            return(
                <div className="beer-form-outer">
                    <div className="beer-form-container">
                    {this.renderErrors()}
                        <form className="beer-form" onSubmit={this.handleSubmit}>
                            <label> Beer Name
                                <input className="beer-form-name"type="text" value={this.state.beer.name} onChange={(e) => (this.handleChange("name", e))} ></input>
                            </label>
                            <label> Brewery
                                <select name="brewery">
                                    <option value="Unknown">Brewery Unknown</option>
                                </select>
                            </label>
                            <label> Abv
                                <input type="text" className="beer-form-abv" value={this.state.beer.abv} onChange={(e) => (this.handleChange("abv", e))}></input>
                            </label>
                            <label>Style
                                <input type="text" value={this.state.beer.beer_type} onChange={(e) => (this.handleChange("beer_type", e))}></input>
                            </label>
                            <label> Description
                                <textarea type="text" className="beer-form-description" value={this.state.beer.description} onChange={(e) => (this.handleChange("description", e))}></textarea>
                            </label>
                            <button className="beer-form-submit">Add new beer</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default BeerForm;