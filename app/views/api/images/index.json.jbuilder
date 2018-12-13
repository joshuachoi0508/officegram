@images.each do |image|
  json.set! image.id do
    json.extract! image, :id, :body, :user_id, :image_url
  end
end
