# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  bio             :text             default("")
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  before_validation :ensure_session_token

  has_many :images,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Image',
    dependent: :destroy

  has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Like',
    dependent: :destroy

  has_many :followeeships,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'Follow',
    dependent: :destroy

  has_many :followerships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Follow',
    dependent: :destroy

  has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Comment',
    dependent: :destroy


  has_many :followings,
    through: :followeeships,
    source: :following

  has_many :followers,
    through: :followerships,
    source: :follower

  has_many :following_photos,
    through: :followings,
    source: :images

  has_one_attached :photo

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    return nil unless @user
    return @user if @user.is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
