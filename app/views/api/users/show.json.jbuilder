
    # json.partial! "api/users/user", user: @user

@user.checkins.each do |checkin|
    json.checkins do
        json.set! checkin.id do
            json.partial! 'api/checkins/checkin', checkin: checkin
        end
    end
end

json.user do
    json.partial! "api/users/user", user: @user
end


