class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
    if user.valid?
        render json: user
    else
        render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    user = User.find_by(id: params[:id])
    if user
      user.update(user_params)
      render json: user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def destroy
    user = User.find(params[:id])
    if user
        user.destroy
        render json: user
    else
        render json: {errors: "User not found"}, status: :not_found
    end        
  end

private

  def user_params
    params.permit(:name, :password, :password_confirmation, :email, :occupation, :salary)

  end
end
