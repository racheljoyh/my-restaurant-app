class DishSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :description, :image
  has_one :category
end
