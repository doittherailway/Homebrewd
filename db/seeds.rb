# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demouser = {username: 'BeerDrinker', password: 'password', email: 'abc@test.com', first_name: 'Peter', last_name: 'Parker'}
User.create(demouser)

Brewery.create({name: "Unknown", description: "Brewery unknown"})
Brewery.create({name: "Basement Brewing", description: "First came the kit brewing, now we're pumping out beers faster than we can share them", location: "Mission District, San Francisco, CA"})

Beer.create({name: "Nuttiest Brown Ale", brewery_id: 1, description: "Malty goodness brewed with cacao nibs and plenty of nuts", beer_type: "Brown Ale", abv: 6.7})
