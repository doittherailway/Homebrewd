import React from 'react';
import { withRouter } from 'react-router';

const beerStyles = [
    "Belgian",
    "Blonde Ale",
    "Bock",
    "Brown Ale",
    "Cider",
    "Cream Ale",
    "English Bitter",
    "Hefeweizen",
    "IPA - American",
    "IPA - Imperial / Double",
    "IPA - International",
    "IPA - Rye",
    "Kolsh",
    "Lager",
    "Lambic",
    "Malt Beer",
    "Mead",
    "Non-Alcoholic Beer",
    "Pale Ale - American",
    "Pale Ale - English",
    "Pilsner",
    "Porter - American",
    "Porter - Coffee",
    "Porter - Other",
    "Pumpkin / Yam Beer",
    "Red Ale - American Amber / Red",
    "Red Ale - Irish",
    "Red Ale - Other",
    "Saison / Farmhouse Ale",
    "Scottish Ale",
    "Sour - Ale",
    "Sour - Berliner Wiesse",
    "Sour - Fruited",
    "Sour - Gose",
    "Stout - American",
    "Stout - Coffee",
    "Stout - Foreign /Export",
    "Stout - Imperial / Double",
    "Stout - Oatmeal",
    "Strong Ale",
    "Wheat Beer - Other",
    "Witbier"
];

class BeerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.beer.name,
            brewery_id: this.props.beer.brewery_id,
            beer_type: this.props.beer.beerType, // beer_type
            description: this.props.beer.description,
            abv: this.props.beer.abv
        };
        this.renderErrors = this.renderErrors.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.styleOptions = this.styleOptions.bind(this);
        this.submitButton = this.submitButton.bind(this);
        this.navigateToBeers = this.navigateToBeers.bind(this);
        this.formHeader = this.formHeader.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.beerFormAction(this.state);
        // this.navigateToBeers();
    }

    handleChange(field, e) {
        let val = e.currentTarget.value;
        this.setState({
                [field]: val
        });
    }

    componentDidMount() {
        this.props.receiveBeerErrors([]);
        this.styleOptions();
        if (this.props.formType === 'Edit') {
            this.setState({
                id: this.props.beer.id
            });
        }
    }

    renderErrors() {
        if (this.props.errors.beers.length > 0) {
            return (
                <div className="error-container-s">
                    <ul className="error-ul">
                        {this.props.errors.beers.map((err, i) => (
                            <li key={`error-${i}`}>{err}</li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return(null);
        }
    }

    styleOptions() {
        let sel = document.getElementById('beerStyleSelect');
        let fragment = document.createDocumentFragment();
        let beerStyle = this.props.selectedStyle;
        beerStyles.forEach((style, index) => {
            var option = document.createElement('option');
            option.innerHTML = style;
            option.value = style;
            if (beerStyle === style) {
                option.selected = "selected"
            }
            fragment.appendChild(option);
        });
        sel.appendChild(fragment);
    }

    submitButton(){
        if (this.props.formType === 'Edit') {
            return(
                <button className="beer-form-submit">Submit Edit</button>
            )
        } else {
            return(
                <button className="beer-form-submit">Add new beer</button>
            )
        }
    }

    formHeader(){
        if (this.props.formType === "Edit") {
            return (
                <div>
                    <p>Propose an Edit</p>
                    <p className="beer-form-header-sub">Did you notice something incorrect with the details of this beer? Propose an edit.</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Add New Beer</p>
                    <p className="beer-form-header-sub">Didn't find what you were looking for? Use this form to add a new beer.</p>
                </div>
            )
        }
    }

    navigateToBeers() {
        this.props.history.push(`/beers/`); //${this.state.beer.id}
    }


    render() {
        if (this.props.formType === 'Edit' && this.props.beer === undefined) {
            return(null);
        } else {
            return(
                <div className="beer-bg">
                    <div className="beer-form-outer">
                        <div className="beer-form-container">
                        <div className="beer-form-header">
                            {this.formHeader()}
                        </div>
                        {this.renderErrors()}
                            <form className="beer-form" onSubmit={this.handleSubmit}>
                                <label> Beer Name
                                    <input className="beer-form-name"type="text" value={this.state.name} onChange={(e) => (this.handleChange("name", e))} ></input>
                                </label>
                                <label> Brewery Name
                                    <select name="brewery">
                                        <option value="Unknown">Brewery Unknown</option>
                                    </select>
                                </label>
                                <label> Abv
                                    <input type="text" className="beer-form-abv" value={this.state.abv} onChange={(e) => (this.handleChange("abv", e))}></input>
                                </label>
                                <label>Style
                                    <div className="select-div">
                                        <select id="beerStyleSelect" value={this.state.beer_thype} onChange={(e) => (this.handleChange("beer_type", e))}></select>
                                    </div>
                                </label>
                                <label> Description
                                    <textarea type="text" className="beer-form-description" value={this.state.description} onChange={(e) => (this.handleChange("description", e))}></textarea>
                                </label>
                                {this.submitButton()}
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(BeerForm);