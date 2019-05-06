json.checkin do
    json.partial! 'checkin', checkin: @checkin
end

json.user do
    @checkin.user
end

json.beer do
    @checkin.beer
end