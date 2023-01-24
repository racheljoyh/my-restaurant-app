class OrdersController < ApplicationController

  def index 
    orders = Order.all.where(:user_id => @current_user.id).order(id: :desc)
    render json: orders
  end
end
