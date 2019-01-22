# Production README

Live site: [OfficeGram](https://officegram.herokuapp.com/#/)

OfficeGram is a single-page image sharing web-app inspired by Instagram. It has `Ruby on Rails` backend, `PostgreSQL` database, and `React.js` with `Redux` framework on the frontend. The theme of the app is the TV show The Office. Visitors can login as Dunder Mifflin (the demo account) and browse through different characters from the show to test out features!

![IntroGif](./app/assets/images/readme/intro_gif.gif)

# Feature and Implementation
### Upload
Users can upload an image on their profile page with a caption. Users can also delete images from their profile by clicking the trash icon on the photo modal. 

For this feature, I used `Amazon Web Services(AWS)` to store photos on the cloud. In upload component, I have a handleFile method that renders error messages based on file type and renders preview of the selected image. 

```javascript
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const fileExtension = file.name.split('.').pop();
      const extensions = ['jpg', 'png', 'JPG', 'PNG'];

      if (extensions.includes(fileExtension)) {
        this.setState({imageFile: file, imageUrl: reader.result, uploadErrors: [] });
      } else {
        this.setState({uploadErrors: ['Please select a jpg or png file']})
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
```

![UploadGif](./app/assets/images/readme/upload.gif)

### Follow
Users can follow each other to get updates on each others' uploads on the index page. For this feature, I used rails associations to find current user's followees photos. 

```ruby
  has_many :followings,
    through: :followeeships,
    source: :following

  has_many :following_images,
    through: :followings,
    source: :images

  has_many :followeeships,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'Follow',
    dependent: :destroy
```


![FollowGif](./app/assets/images/readme/follow.gif)
### User Search
Users can search for other users based on their username and visit their profile page. For this feature, I used user input and rails Active Record querying to fetch necessary users to render as the search result.

```ruby
  def index
    @users = User.where("lower(username) LIKE ?", "#{params[:username].downcase}%")
    render :index
  end
```

![SearchGif](./app/assets/images/readme/search.gif)

### Like and comment
A user can like and comment on different images. One user is only allowed to give one like per image but can comment as many times as he/she wishes per image. A like/comment can be removed easily by clicking the like button again/clicking the x button next to the comment.

![CommentLikeGif](./app/assets/images/readme/like_comment.gif)