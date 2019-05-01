class ChangeBeerColumnType < ActiveRecord::Migration[5.2]
  def change
    remove_column :beers, :type
    add_column :beers, :beer_type, :string
  end
end
