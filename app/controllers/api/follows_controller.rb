class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.follower_id = current_user.id
  end
end
