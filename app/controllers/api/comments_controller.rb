class Api::CommentsController < ApplicationController
  def index
    @comments = Image.where(image_id: params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.save
    render :show
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:image_id, :body)
  end
end
