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
        # debugger
        render "api/checkins/index"
    end

    def create

        @checkin = Checkin.new({
            description: checkin_params[:description],
            rating: checkin_params[:rating],
            location: checkin_params[:location],
            user_id: checkin_params[:user_id],
            beer_id: checkin_params[:beer_id]
        })
        
        if checkin_params[:photo] != "null"
            @checkin.photo = checkin_params[:photo]
        end

        if @checkin.save
            render "api/checkins/show" 
        else
            render json: @checkin.errors.full_messages, status: 422
        end
    end

    def show
        @checkin = Checkin.includes(:beer, :user).find(params[:id])
        render "api/checkins/show"
    end

    def destroy
        @checkin = Checkin.find(params[:id])
        if @checkin.user_id == current_user.id
            @checkin.destroy
            render "api/checkins/show"
        else
            # render errors
        end
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
