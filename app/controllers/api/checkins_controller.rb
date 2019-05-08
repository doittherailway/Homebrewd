class Api::CheckinsController < ApplicationController

    def index
        # debugger
        if params[:resource_type]
            if params[:resource_type] == 'User'
                @checkins = Checkin.where(user_id: params[:resource_id]).includes(:beer, :user)
            else
                @checkins = Checkin.where(beer_id: params[:resource_id]).includes(:beer, :user)
            end
        else 
            @checkins = Checkin.all.includes(:beer, :user)
        end
        
        render "api/checkins/index"
    end

    def create
        @checkin = Checkin.new(checkin_params)

            if checkin_params[:photo] != "null"
                @checkin.photo = checkin_params[:photo]
            end
        if @checkin.save
            render "api/checkins/show" #maybe some different render, was /beers/id
        else
            render json: @checkin.errors.full_messages, status: 422
        end
    end

    def show
        @checkin = Checkin.includes(:beer, :user).find(params[:id])
        render "api/checkins/show"
    end


    private
    def checkin_params
        params.require(:checkin).permit(
            :user_id, 
            :beer_id, 
            :description, 
            :rating, 
            :location,
            :photo
        )
    end

end
