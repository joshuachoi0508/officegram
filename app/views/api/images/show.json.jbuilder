json.extract! @image, :id, :body, :user_id
json.created_at @image.created_at.to_time.to_formatted_s(:long).split(",")[0]
json.liker_ids @image.likers.pluck(:id)
json.image_url url_for(@image.image)
json.username @image.user.username

json.comments do
  @image.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.username comment.user.username
      json.body comment.body
      json.image_id comment.image_id
    end
  end
end
