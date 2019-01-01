@users.each do |user|
    json.set! user.username do
        json.id user.id
        json.username user.username
        json.photo_url url_for(user.photo)
    end
end