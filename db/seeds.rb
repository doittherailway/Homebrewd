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

brewery_2 = Brewery.find_by(name: "Basement Brewing").id
brewery_3 = Brewery.find_by(name: "Laughunitas Brewing Co").id
brewery_4 = Brewery.find_by(name: "Yardwork Brewing").id

Beer.create({name: "Nuttiest Brown Ale", brewery_id: 1, description: "Malty goodness brewed with cacao nibs and plenty of nuts", beer_type: "Brown Ale", abv: 6.7})
Beer.create({name: "Hopposits Attract", brewery_id: brewery_2, description: "We’ve taken the traditional English Style and created our own fuller flavored IPA with bright citrus aromas and a bold hop finish. With hoppy, bold, and smooth flavor, this IPA is the perfect beer for hopheads and discovery drinkers alike", beer_type: "IPA - American", abv: 7.5})
Beer.create({name: "Makin' It Grain", brewery_id: brewery_3, description: "This beer is not candy or mother’s milk. It is not brewed by gypsies or aliens, nor does it contain any zombie dirt. This is an American Style IPA brewed with Citra Hops. It is citrusy, sticky, hoppy and delicious. Simply drink it and enjoy it. Don’t hoard this beer.  This is a very hop forward American style IPA. Brewed with Pale, Vienna, Munich and wheat malt for a solid base for all American hops.", beer_type: "IPA - Imperial / Double", abv: 8.2})
Beer.create({name: "ZZ Hop", brewery_id: brewery_4, description: "An almost opaque, wonderfully silky and smooth textured ale with a complex medium dry palate and bittersweet finish", beer_type: "Stout - Oatmeal", abv: 5})
Beer.create({name: "Cherrific", brewery_id: brewery_2, description: "Cherrific is a barrel-aged fruited sour ale that showcases the distinct fruit characteristics of Montmorency cherries melded with a mildly tart base of sour ale. The beer pours with rich hues of red and pink foam, with zesty effervescence. Tart cherries dominate the aroma, with hints of wine and cider. Notes of cherry pie, lactic tartness and mild barnyard envelop the palate. Finish is dry, with lingering cherry fruitiness.", beer_type: "Sour - Fruited", abv: 4.1})
# Beer.create({name: "", }) 
# Hopposits Attract
#Only as Old Ale as you Feel
#It burns when IPA.
#ZZ Hop
#Paul Blart: Malt & Hop
#Makin' It Grain