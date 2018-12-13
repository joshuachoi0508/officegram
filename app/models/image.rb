class Image < ApplicationRecord
  # validates :ensure_photo

  belongs_to :user
  has_one_attached :image_url

  # def ensure_photo
  #   unless self.image.attached?
  #     errors[:image] << "You must attach a photo"
  #   end
  # end
end
