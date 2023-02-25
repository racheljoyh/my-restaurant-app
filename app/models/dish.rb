class Dish < ApplicationRecord
  belongs_to :category, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_and_belongs_to_many :shopping_cart
end
