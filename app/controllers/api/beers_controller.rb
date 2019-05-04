class Api::BeersController < ApplicationController

    def index
        @beers = Beer.all
        render "api/beers/index"
    end

    def new
        @beer = Beer.new()
        render "api/beers/form"
    end

    def create
        @beer = Beer.new(beer_params)
        if @beer.save
            render "api/beers/show"
        else
            render json: @beer.errors.full_messages, status: 422
        end
    end

    def show
        @beer = Beer.find(params[:id])
    end

    def edit
        @beer = Beer.find(params[:id])
        render "api/beers/form"
    end

    def update
        @beer = Beer.find(params[:id])

        if @beer.update(beer_params)
            render "api/beers/show"
        else
            render json: @beer.errors.full_messages, status: 422
        end
    end

    def destroy
        @beer = Beer.find(params[:id])
        @beer.destroy
        render "api/beers/show"
    end

    private
    def beer_params
        params.require(:beer).permit(
            :name,
            :brewery_id,
            :description,
            :beer_type,
            :abv
        )
    end
end
