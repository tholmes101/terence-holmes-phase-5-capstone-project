class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize

  private

  # If the user is not logged in when they make the request,
  # returns a JSON response with an error message, and a status of 401 (Unauthorized)
  def authorize
    user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless user
  end

  # If the user is not valid,
  # returns a JSON response with the error message, and an HTTP status code of 422 (Unprocessable Entity)
  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end
