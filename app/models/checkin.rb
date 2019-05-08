class Checkin < ApplicationRecord
    validates :user_id, :beer_id, :description, :rating, presence: true
    validates :rating, numericality: {only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 5}
    
    belongs_to :user

    belongs_to :beer

    has_one_attached :photo

       # has_many :thing, dependant :destroy

    has_one :brewery,
        through: :beer  

end
