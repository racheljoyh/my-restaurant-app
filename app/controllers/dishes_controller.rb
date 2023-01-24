class DishesController < ApplicationController

  def index
    render json: Dish.all
  end

  def create
    recipe = @current_user.recipes.create!(recipe_params)
    render json: recipe, status: :created
  end

  private

  def recipe_params
    params.permit(:title, :price, :description, :image, :category_id )
  end
end
