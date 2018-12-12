class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?
  skip_before_action :verify_authenticity_token

  private
  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_login
    unless current_user
      render json: ['Your credentials are invalid'], status: 401
    end
  end
end
