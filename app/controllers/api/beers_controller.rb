class Api::BeersController < ApplicationController

    def index
        @beers = Beer.all.includes(:brewery, :checkins)
        render "api/beers/index"
    end

    def new
        @beer = Beer.new()
        render "api/beers/form"
    end

    def create
        @beer = Beer.new({
            name: beer_params[:name],
            description: beer_params[:description],
            beer_type: beer_params[:beer_type],
            abv: beer_params[:abv]  
        })
        @beer.brewery_id = Beer.find_brewery_id(beer_params[:brewery])

        if @beer.save
            render "api/beers/show"
        else
            render json: @beer.errors.full_messages, status: 422
        end
    end

    def show
        @beer = Beer.includes(:brewery, :checkins).find(params[:id])
    end

    def edit
        @beer = Beer.find(params[:id])
        render "api/beers/form"
    end

    def update
        @beer = Beer.find(params[:id])

        @beer.name = beer_params[:name]
        @beer.description = beer_params[:description]
        @beer.beer_type = beer_params[:beer_type]
        @beer.abv = beer_params[:abv] 
        @beer.brewery_id = Beer.find_brewery_id(beer_params[:brewery])
        if beer_params[:photo] != "null"
            @beer.photo = beer_params[:photo]
        end

        if @beer.save
            render "api/beers/show"
        else
            render json: @beer.errors.full_messages, status: 422
        end
    end

    # def destroy
    #     @beer = Beer.find(params[:id])
    #     @beer.destroy
    #     render "api/beers/show"
    # end  

    private
    def beer_params
        params.require(:beer).permit(
            :name,
            :brewery_id,
            :brewery,
            :description,
            :beer_type,
            :abv,
            :id, 
            :photo
        )
    end
end
