class CreateCheckins < ActiveRecord::Migration[5.2]
  def change
    create_table :checkins do |t|
      t.integer :user_id, null: false
      t.integer :beer_id, null: false
      t.text :description, null: false
      t.integer :rating, null: false
      t.string :location

      t.timestamps
    end
    
    add_index :checkins, :user_id
    add_index :checkins, :beer_id
  end
end
