class AdministratorsController < ApplicationController
   before_action :check_if_admin


  # /admin/orders/:id
  def order
    @order = Order.find(params[:id])
    render json: @order
  end

  # /admin/orders
  def order_index
    @orders = Order.all.order(created_at: :desc)
    render json: @orders
  end

  # /admin/orders/:order_id
  def update_status
    @order = Order.find(params[:id])
    @order.update!(status: params[:status])
    render json: @order, status: :accepted
  end


  # /admin/dishes
  def dish_index
    @dishes = Dish.all.order(category: :asc)

    render json: @dishes
  end

  # /admin/users
  def user_index
    @users = User.all.order(created_at: :desc)
    render json: @users
  
  end

  # /admin/categories
  def category_index
    @categories = Category.all
    render json: @categories
  end

end

  
