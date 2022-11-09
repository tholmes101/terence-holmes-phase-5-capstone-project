class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  # Saves a new user to the database
  # Saves the user's ID in the session hash
  # Returns a JSON response with the user's data
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
  
  # Returns the user as a JSON object
  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end