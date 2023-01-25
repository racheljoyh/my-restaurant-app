class OrdersController < ApplicationController

  def user_orders 
    orders = Order.all.where(:user_id => params[:user_id]).order(id: :desc)
    render json: orders
  end
end
