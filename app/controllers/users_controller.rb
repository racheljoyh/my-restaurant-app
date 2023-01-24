class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  
  # /me route
  def show
    render json: @current_user, serializer: UserWithReviewsAndOrdersSerializer
  end

  # /signup route
  def create
    user = User.create!(user_params)
      session[:user_id] = user.id 
      render json: user, status: :created
  end

  def update_profile
      @current_user.update!(user_params)
      render json: @current_user
  end




private 

  def user_params
      params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
  end

end 
