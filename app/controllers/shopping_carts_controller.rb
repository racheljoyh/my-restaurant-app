class ShoppingCartsController < ApplicationController
    def new
        dish = ShoppingCart.create(:user_id => params[:user_id], :dish_id => params[:dish_id])
        render json: Dish.find(params[:dish_id]), status: :created
    end

    def delete_all
        ShoppingCart.where(user_id: params[:user_id]).destroy_all
        head :no_content
    end

    def delete_cart_item
        ShoppingCart.where(user_id: params[:user_id], dish_id: params[:dish_id]).destroy_all
        head :no_content
    end


end
