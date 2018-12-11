class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  before_validation :ensure_session_token

  has_many :images

  has_many :followers,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'User'

end
