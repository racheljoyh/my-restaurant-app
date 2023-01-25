class UserWithReviewsAndOrdersSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :role
  has_many :orders
  has_many :reviews
end
