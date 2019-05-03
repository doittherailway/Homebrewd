
json.beer do
    json.id beer.id
    json.name beer.name
    json.brewery Brewery.find(beer.brewery_id).name
    json.description beer.description
    json.beerType beer.beer_type
    json.abv beer.abv
    json.createdAt beer.created_at.strftime("%m/%d/%Y")
end