class Brewery < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :description, presence: true

    has_many :beers

    has_many :checkins,
        through: :beers,
        source: :checkins
end
