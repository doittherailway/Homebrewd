class Api::CheckinsController < ApplicationController

    def create
        @checkin = Checkin.new(checkin_params)

        if @checkin.save
            render "api/beers/show" #maybe some different render
        else
            render json: @beer.errors.full_messages, status: 422
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
