# == Schema Information
#
# Table name: images
#
#  id         :bigint(8)        not null, primary key
#  body       :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ApplicationRecord
  # validates :ensure_photo

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :likes,
    primary_key: :id,
    foreign_key: :image_id,
    class_name: 'Like'

  has_many :comments,
    primary_key: :id,
    foreign_key: :image_id,
    class_name: 'Comment'

  has_one_attached :image

  # def ensure_photo
  #   unless self.image.attached?
  #     errors[:image] << "You must attach a photo"
  #   end
  # end
end
