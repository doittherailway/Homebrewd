# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demouser = {username: 'BeerDrinker', password: 'password', email: 'abc@test.com', first_name: 'Peter', last_name: 'Parker'}
User.create(demouser)
