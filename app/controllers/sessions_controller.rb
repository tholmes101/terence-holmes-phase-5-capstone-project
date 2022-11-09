class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  # Finds a user in the database using the username
  # Saves the user's ID to the session hash
  # Returns the user as a JSON object

  # If the user's username and password are not authenticated,
  # Returns a JSON response with an error message, and a status of 401 (Unauthorized)
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  # Removes the user ID from the session hash
  # Returns an empty response with a 204 No Content status code
  def destroy
    session.delete :user_id
    head :no_content
  end
end