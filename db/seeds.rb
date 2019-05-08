# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demouser = {username: 'BeerDrinker', password: 'password', email: 'abc@test.com', first_name: 'Peter', last_name: 'Parker'}
User.create(demouser)
User.create({username: 'CatLover', password: 'password', email: 'def@test.com', first_name: 'Mary-Jane', last_name: 'Watson'})
User.create({username: 'HopHead', password: 'password', email: 'ghi@test.com', first_name: 'Miles', last_name: 'Morales'})
User.create({username: 'GreenGoblin', password: 'password', email: 'jkl@test.com', first_name: 'Harry', last_name: 'Osborn'})

user_1 = User.find_by(username: 'BeerDrinker').id
user_2 = User.find_by(username: 'CatLover').id
user_3 = User.find_by(username: 'HopHead').id
user_4 = User.find_by(username: 'GreenGoblin').id

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
beer_1 = Beer.find_by(name: "Nuttiest Brown Ale").id
beer_2 = Beer.find_by(name: "Hopposits Attract").id
beer_3 = Beer.find_by(name: "Makin' It Grain").id
beer_4 = Beer.find_by(name: "ZZ Hop").id
beer_5 = Beer.find_by(name: "Cherrific").id

review_texts = [
    "Beautiful tart aroma, laced with a touch of papaya and rosewater. Absolutely disgusting buttery malt backbone, maybe a little raisin and orange. Heavy mouthfeel and bone dry finish",
    "Not bad, not bad at all.",
    "Absolutely disgusting, wayyyyy too bitter and hoppy",
    "Stunning herbal palate, with overtones of biscuit malt and cilantro. Hearty yet effervescent mouthfeel and extremely long finish.",
    "Pours a murky strawberry blonde with a thin head. Overtones of orange and citrus.",
    "Yuck.",
    "Easy to drink, nothing fancy.",
    "Juicy and hazy",
    "Nice nutty beer, random bitterness doesn't quite fit the rest of the flavours though.",
    "Wow, there's a lot going on in this beer and it's all good. Cinnamon complements the sugar, light coffee...yum!",
    "Simple, clean malt deliciousness.",
    "Tasty, quite sweet but not overly so",
    "Juicy, tasty and refreshing. Nicely hopped. Very easy to drink"
]

checkin_1 = Checkin.create({user_id: user_2, beer_id: beer_1, description: review_texts[9], rating: 3, location: "Berkeley, CA"})
checkin_2 = Checkin.create({user_id: user_1, beer_id: beer_2, description: review_texts[2], rating: 4, location: "San Francisco, CA"})
checkin_3 = Checkin.create({user_id: user_1, beer_id: beer_1, description: review_texts[3], rating: 2})
checkin_4 = Checkin.create({user_id: user_3, beer_id: beer_3, description: review_texts[4], rating: 5, location: "My house"})
checkin_5 = Checkin.create({user_id: user_3, beer_id: beer_5, description: review_texts[7], rating: 4, location: "The Loft"})
checkin_6 = Checkin.create({user_id: user_4, beer_id: beer_4, description: review_texts[12], rating: 1})
checkin_7 = Checkin.create({user_id: user_4, beer_id: beer_4, description: review_texts[0], rating: 2, location: "Outside"})
checkin_8 = Checkin.create({user_id: user_4, beer_id: beer_1, description: review_texts[8], rating: 3, location: "Jeff's House"})
checkin_9 = Checkin.create({user_id: user_3, beer_id: beer_5, description: review_texts[7], rating: 4, location: "The Loft"})
checkin_10 = Checkin.create({user_id: user_2, beer_id: beer_2, description: review_texts[1], rating: 1})
checkin_11 = Checkin.create({user_id: user_4, beer_id: beer_3, description: review_texts[6], rating: 2, location: "the Basement"})
checkin_12 = Checkin.create({user_id: user_2, beer_id: beer_1, description: review_texts[5], rating: 3})

chph_1 = open('https://s3-us-west-1.amazonaws.com/homebrewd-seeds/1.jpg') #ipa
chph_3 = open('https://s3-us-west-1.amazonaws.com/homebrewd-seeds/10.jpg') #red
chph_2 = open('https://s3-us-west-1.amazonaws.com/homebrewd-seeds/11.jpg') #orange
chph_4 = open('https://s3-us-west-1.amazonaws.com/homebrewd-seeds/3.jpg') #brown
chph_5 = open('https://s3-us-west-1.amazonaws.com/homebrewd-seeds/4.jpg') #brown
chph_6 = open('https://s3-us-west-1.amazonaws.com/homebrewd-seeds/5.jpg') #ipa
chph_7 = open('https://s3-us-west-1.amazonaws.com/homebrewd-seeds/7.jpg') #ipa
chph_8 = open('https://s3-us-west-1.amazonaws.com/homebrewd-seeds/9.jpg') #ipa

checkin_2.photo.attach(io: chph_1, filename: 'checkin_photo.jpg')
checkin_3.photo.attach(io: chph_4, filename: 'checkin_photo1.jpg')
checkin_6.photo.attach(io: chph_5, filename: 'checkin_photo2.jpg')
checkin_5.photo.attach(io: chph_3, filename: 'checkin_photo3.jpg')
checkin_4.photo.attach(io: chph_6, filename: 'checkin_photo4.jpg')
checkin_9.photo.attach(io: chph_2, filename: 'checkin_photo5.jpg')
checkin_10.photo.attach(io: chph_7, filename: 'checkin_photo6.jpg')
checkin_11.photo.attach(io: chph_8, filename: 'checkin_photo7.jpg')
checkin_12.photo.attach(io: chph_5, filename: 'checkin_photo2.jpg')


