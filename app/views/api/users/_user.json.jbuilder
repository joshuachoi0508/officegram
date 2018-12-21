json.extract! user, :id, :username, :photo, :bio
json.images do
  user.images.each do |image|
    json.set! image.id do
      json.extract! image, :id, :body, :user_id, :user
      json.image_url url_for(image.image)
      json.liker_ids image.likers.pluck(:id)
      json.created_at image.created_at.to_time.to_formatted_s(:long).split(",")[0]
    end
  end
end

json.photo_url url_for(user.photo)

json.follower_ids user.followers.pluck(:id)
json.following_ids user.followings.pluck(:id)
