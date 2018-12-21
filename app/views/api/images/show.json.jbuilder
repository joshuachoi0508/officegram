json.extract! @image, :id, :body, :user_id
json.created_at @image.created_at.to_time.to_formatted_s(:long).split(",")[0]
json.liker_ids @image.likers.pluck(:id)
json.image_url url_for(@image.image)
