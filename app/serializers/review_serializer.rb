class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  has_one :user
  has_one :dish
end
