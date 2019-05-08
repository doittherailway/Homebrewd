json.beer do
    json.partial! "api/beers/beer", beer: @beer
end

json.brewery do
    json.extract! @beer.brewery, :id, :name
end