class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      @user.photo.attach(io: File.open("#{Rails.root}/app/assets/images/default_user.png"), filename: 'default_user.png')
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = current_user

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :photo, :bio)
  end
end
