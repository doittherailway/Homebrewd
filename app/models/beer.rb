class Beer < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :brewery_id, :description, :beer_type, presence: true

    belongs_to :brewery

    def assign_null_brewery!
        self.brewery_id = Brewery.find_by(name: 'Unknown')
    end
end
