@beers.each do |beer|
    json.beers do
        json.set! beer.id do 
            json.partial! 'beer', beer: beer
        end
    end

    json.breweries do
        json.set! beer.brewery_id do
            json.extract! beer.brewery, :id, :name
        end
    end
end

