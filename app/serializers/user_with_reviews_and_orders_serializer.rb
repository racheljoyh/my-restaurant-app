class UserWithReviewsAndOrdersSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username
  has_many :orders
  has_many :reviews
end
