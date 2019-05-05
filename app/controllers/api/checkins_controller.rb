class Api::CheckinsController < ApplicationController

    def index
        # debugger
        if params[:resource_type]
            if params[:resource_type] == 'User'
                @checkins = Checkin.where(user_id: params[:resource_id])
            else
                @checkins = Checkin.where(beer_id: params[:resource_id])
            end
        else 
            @checkins = Checkin.all
        end
        
        render "api/checkins/index"
    end

    def create
        @checkin = Checkin.new(checkin_params)
        @beer = Beer.find(@checkin.beer_id)
        if @checkin.save
            render "api/checkins/show" #maybe some different render, was /beers/id
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
