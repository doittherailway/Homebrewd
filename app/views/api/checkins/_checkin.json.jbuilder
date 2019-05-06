
json.id checkin.id
json.user do
    json.userId checkin.user_id
    json.userName User.find(checkin.user_id).username
end
json.beer do
    json.beerId checkin.beer_id
    json.beerName Beer.find(checkin.beer_id).name
end
json.description checkin.description
json.rating checkin.rating
json.location checkin.location
json.createdAt checkin.created_at.strftime("%m/%d/%Y")
 

# json.id checkin.id
# json.userId checkin.user_id
# json.beerId checkin.beer_id
# json.description checkin.description
# json.rating checkin.rating
# json.location checkin.location
# json.createdAt checkin.created_at.strftime("%m/%d/%Y")