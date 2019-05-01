class Brewery < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :description, presence: true

    has_many :beers
end
