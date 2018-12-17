json.extract! @user, :id, :username, :photo, :bio

json.images do
  @user.images.each do |image|
    json.set! image.id do
      json.extract! image, :id, :body, :user_id, :user
      json.image_url url_for(image.image)
    end
  end
end

json.photo_url url_for(@user.photo)
