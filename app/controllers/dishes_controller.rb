class DishesController < ApplicationController

  before_action :check_if_admin,
                only: [:create, :destroy, :update]

  def index
    render json: Dish.all
  end


  def create
    dish = Dish.create!(dish_params)
    render json: dish, status: :created
  end

  def update
    dish = Dish.find(params[:id])
    dish.update!(dish_params)
    render json: dish, status: :accepted
  end

 def destroy
    Dish.find(params[:id]).destroy
    head :no_content    
  end


  private

  def dish_params
    params.permit(:title, :price, :description, :image, :category_id )
  end
end
