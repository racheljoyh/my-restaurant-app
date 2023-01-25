class OrdersController < ApplicationController

  def user_orders 
    orders = Order.all.where(:user_id => params[:user_id]).order(id: :desc)
    render json: orders
  end

  def update
    @order = Order.find(params[:id])
    @order.update!(status: params[:status])
    render json: @order, status: :accepted
  end

 
end
