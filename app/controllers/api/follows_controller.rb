class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follower_params)
    @follow.follower_id = current_user.id
    @follow.save
    render :show
  end

  def destroy
    @follow = Follow.find_by_user_id(params[:id])
    @follow.destroy
    render :show
  end

  private
  def follower_params
    params.require(:follow).permit(:user_id)
  end
end
