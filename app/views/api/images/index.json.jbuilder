@images.each do |image|
  json.set! image.id do
    json.extract! image, :id, :body, :user_id, :created_at
    json.user_photo_url url_for(image.user.photo)
    json.username image.user.username
    json.liker_ids image.likes.pluck(:id)
    json.image_url url_for(image.image)
  end
end
