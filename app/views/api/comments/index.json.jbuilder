@comments.each do |comment|
  json.extract! comment, :id, :body, :user_id, :image_id
end
