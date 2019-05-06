
json.beer do
    json.partial! "api/beers/beer", beer: @beer
end

json.brewery do
    json.extract! @beer.brewery, :id, :name
end

# if @beer.checkins
#     @beer.checkins.each do |checkin|
#         json.checkins do
#             json.set! checkin.id do
#                 json.partial! "api/checkins/checkin" , checkin: checkin
#             end
#         end
#     end
# else
#     json.checkins {}
# end


# if @checkins
#     json.checkinIds @checkins.each do |checkin|
#         json.id checkin.id
#     end
# end

# json.checkins do
#     beer.checkins.each do |checkin|
#         json.set! checkin.id do
#              checkin
#         end
#     end
# end