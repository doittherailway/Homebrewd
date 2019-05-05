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
Brewery.create({name: "Hilarious Homebrew", description:"Funny how it happened..."})
Brewery.create({name: "Mad Malts Brewing", description: "Madness, malts, magic and mainly multiple mentions of maybe marvellous middle metal mice.", location: "Oakland, CA"})
Brewery.create({name: "Laughunitas Brewing Co", description: "Laughably close clones to the real thing"})
Brewery.create({name: "Yardwork Brewing", description: "A field seemed to big to work with, so let's start with a yard.", location: "Berkeley, CA"})
Brewery.create({name: "Yarnistice Brews", description: "If a brother and sister can make a brewery with a truce, so can we.", location: "Richmond, CA"})



Beer.create({name: "Nuttiest Brown Ale", brewery_id: 1, description: "Malty goodness brewed with cacao nibs and plenty of nuts", beer_type: "Brown Ale", abv: 6.7})
# Beer.create({name: "", }) 
# Hopposits Attract
#Only as Old Ale as you Feel
#It burns when IPA.
#ZZ Hop
#Paul Blart: Malt & Hop
#Makin' It Grain