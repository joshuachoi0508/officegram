# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  image_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  belogs_to :image,
    primary_key: :id,
    foreign_key: :image_id,
    class_name: 'Image'

  belongs_to :user,
    primary: :id,
    foreign_key: :user_id,
    class_name: 'User'
end
