
json.id checkin.id
json.userName User.find(checkin.user_id).username
json.beerName Beer.find(checkin.beer_id).name
json.description checkin.description
json.rating checkin.rating
json.location checkin.location
json.createdAt checkin.created_at.strftime("%m/%d/%Y")
 