@beers.each do |beer|
    json.set! beer.id do
        json.partial! 'beer', beer: beer
    end
end
