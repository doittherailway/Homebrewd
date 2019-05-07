import React from 'react';
import { withRouter } from 'react-router';
import { RECEIVE_BEER } from '../../../actions/beer_actions';

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

const breweryNames = [
    "Unknown",
    "Basement Brewing",
    "Hilarious Homebrew",
    "Mad Malts Brewing",
    "Laughunitas Brewing Co",
    "Yardwork Brewing",
    "Yarnistice Brews"
];

class BeerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.beer.name,
            brewery_id: this.props.beer.brewery_id,
            beer_type: this.props.beer.beerType, 
            description: this.props.beer.description,
            abv: this.props.beer.abv,
            photoFile: null
        };
        this.renderErrors = this.renderErrors.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.styleOptions = this.styleOptions.bind(this);
        this.submitButton = this.submitButton.bind(this);
        this.formHeader = this.formHeader.bind(this);
        this.breweryOptions = this.breweryOptions.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.addImage = this.addImage.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.formType === 'Edit') {
            const formData = new FormData();
            formData.append('beer[name]', this.state.name);
            formData.append('beer[brewery_id]', this.state.brewery_id);
            formData.append('beer[beer_type]', this.state.beer_type);
            formData.append('beer[description]', this.state.description);
            formData.append('beer[abv]', this.state.abv);
            formData.append('beer[photo]', this.state.photoFile);
            formData.append('beer[id]', this.state.id);

            this.props.beerFormAction(formData, this.state.id)
                .then((action) => {
                    if (action.type === "RECEIVE_BEER") {
                        return (this.props.history.push(`/beers/${action.beer.id}`))
                    }
                });

        } else {
            this.props.beerFormAction(this.state)
            .then((action) => {
                if (action.type === "RECEIVE_BEER") {
                    return(this.props.history.push(`/beers/${action.beer.id}`));
                }
            });
        }
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
        this.breweryOptions();
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

    breweryOptions(){
        let sel = document.getElementById('brewerySelect');
        let fragment = document.createDocumentFragment();
        let breweryName = this.props.brewery
        breweryNames.forEach((brewery, index) => {
            var option = document.createElement('option');
            option.innerHTML = brewery;
            option.value = brewery;
            if (breweryName === brewery) {
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

    addImage() {
        if (this.props.formType === "Edit") {
            return(
                <div className="beer-form-edit-photo-container">
                    <input type="file" onChange={this.handleFile}/>
                </div>
            )
        }
    }

    handleFile(e) {
        this.setState({
            photoFile: e.currentTarget.files[0]
        })
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
                                <div className="form-brewery-div">
                                    <label> Brewery Name
                                        <div className="form-brewery-select-div">
                                            <select className="brewery" id="brewerySelect" onChange={(e) => (this.handleChange("brewery", e))}>
                                            </select>
                                        </div>
                                    </label>
                                </div>
                                <div className="form-abv-style-div">
                                    <div className="beer-form-abv-div">
                                        <label> Abv
                                            <input type="text" className="beer-form-abv" value={this.state.abv} onChange={(e) => (this.handleChange("abv", e))}></input>
                                        </label>
                                    </div>
                                    <label>Style
                                        <div className="select-div">
                                            <select id="beerStyleSelect" value={this.state.beer_thype} onChange={(e) => (this.handleChange("beer_type", e))}></select>
                                        </div>
                                    </label>
                                </div>
                                <label> Description
                                    <textarea type="text" className="beer-form-description" maxLength="750" value={this.state.description} onChange={(e) => (this.handleChange("description", e))}></textarea>
                                </label>
                                {this.addImage()}
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

// <option value="Unknown">Brewery Unknown</option>
//     <option value="Basement Brewing">Basement Brewing</option>
//     <option value="Hilarious Homebrew">Hilarious Homebrew</option>
//     <option value="Mad Malts Brewing">Mad Malts Brewing</option>
//     <option value="Laughunitas Brewing Co">Laughunitas Brewing Co</option>
//     <option value="Yardwork Brewing">Yardwork Brewing</option>
//     <option value="Yarnistice Brews">Yarnistice Brews</option>