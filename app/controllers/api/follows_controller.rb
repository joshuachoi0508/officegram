class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.follower_id = current_user.id
  end

  def destroy
    @follow = Follow(params[:id])
    @follow.destroy
  end
end
