
    json.id checkin.id
    json.user_id checkin.user_id
    json.beer_id checkin.beer_id
    json.description checkin.description
    json.rating checkin.rating
    json.location checkin.location
    json.created_at checkin.created_at.to_f * 1000
    if checkin.photo.attached?
        json.checkinPhotoUrl url_for(checkin.photo)
    else
        json.checkinPhotoUrl ""
    end

 

# json.id checkin.id
# json.userId checkin.user_id
# json.beerId checkin.beer_id
# json.description checkin.description
# json.rating checkin.rating
# json.location checkin.location
# json.createdAt checkin.created_at.strftime("%m/%d/%Y")