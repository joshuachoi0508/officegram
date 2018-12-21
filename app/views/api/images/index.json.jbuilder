@images.each do |image|
  json.set! image.id do
    json.extract! image, :id, :body, :user_id
    json.comments do
      image.comments.each do |comment|
        json.set! comment.id do
          json.id comment.id
          json.username comment.user.username
          json.body comment.body
          json.image_id comment.image_id
        end
      end
    end
    json.user_photo_url url_for(image.user.photo)
    json.created_at image.created_at.to_time.to_formatted_s(:long).split(",")[0]
    json.username image.user.username
    json.liker_ids image.likers.pluck(:id)
    json.image_url url_for(image.image)
  end
end
