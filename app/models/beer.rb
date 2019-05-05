class Beer < ApplicationRecord

    BEER_TYPES = [
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
    ]

    validates :name, uniqueness: true
    validates :name, :brewery_id, :description, :beer_type, presence: true
    validates :beer_type, inclusion: BEER_TYPES

    belongs_to :brewery

    

    def self.assign_null_brewery
        return Brewery.find_by(name: 'Unknown').id
    end

    def self.find_brewery_id(brewery_name)

        brewery = Brewery.find_by(name: brewery_name)

        if brewery != nil
            return brewery.id
        else
            return Beer.assign_null_brewery
        end
    end

    
end
