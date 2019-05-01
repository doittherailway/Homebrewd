class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.integer :brewery_id, null: false
      t.text :description, null: false
      t.string :type, null: false
      t.float :abv

      t.timestamps
    end

    add_index :beers, :name, unique: true
    add_index :beers, :brewery_id
  end
end
