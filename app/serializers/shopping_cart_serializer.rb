class ShoppingCartSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :dish
end
