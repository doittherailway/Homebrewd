
json.beer do
    json.id beer.id
    json.name beer.name
    json.brewery Brewery.find(beer.brewery_id).description
    json.description beer.description
    json.beerType beer.beer_type
    json.abv beer.abv
end