class LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    @like.save
  end

  def destroy
    @like = Like.find_by_user_id(params[:id])
    @like.destroy
  end

  private
  def like_params
    params.require(:like).permit(:image_id)
  end
end
