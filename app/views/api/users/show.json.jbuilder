json.extract! @user, :id, :username, :photo
# why doesn't this work
# json.photo_url url_for(@user.photo)

# json.set! @user.id do
#   json.extract! :id, :username
#   json.photo_url url_for(@user.photo)
# end
