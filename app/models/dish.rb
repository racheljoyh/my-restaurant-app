class Dish < ApplicationRecord
  belongs_to :category
  has_many :reviews
  has_and_belongs_to_many :shopping_cart
end
