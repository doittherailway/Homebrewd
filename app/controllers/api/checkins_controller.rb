class Api::CheckinsController < ApplicationController

    def index
        @checkins = Checkin.all
        render "api/checkins/index"
    end

    def create
        @checkin = Checkin.new(checkin_params)
        @beer = Beer.find(@checkin.beer_id)
        if @checkin.save
            render "api/beers/show" #maybe some different render
        else
            render json: @checkin.errors.full_messages, status: 422
        end
    end

    def show
        render "api/checkins/show"
    end


    private
    def checkin_params
        params.require(:checkin).permit(
            :user_id, 
            :beer_id, 
            :description, 
            :rating, 
            :location)
    end

end
