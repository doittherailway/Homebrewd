



    # json.id beer.id
    # json.name beer.name
    # # json.brewery Brewery.find(beer.brewery_id).name
    # json.brewery_id beer.brewery_id
    # json.description beer.description
    # json.beerType beer.beer_type
    # json.abv beer.abv
    # json.createdAt beer.created_at.strftime("%m/%d/%Y")


    # json.truncDescMed beer.description.slice(0, 150)
    # json.truncDescShort beer.description.slice(0, 84)


    ## Handle counting in here too maybe?

   
        json.id beer.id
        json.name beer.name
        json.brewery_id beer.brewery_id
        json.description beer.description
        json.beer_type beer.beer_type
        json.abv beer.abv
        json.createdAt beer.created_at.strftime("%m/%d/%Y")



