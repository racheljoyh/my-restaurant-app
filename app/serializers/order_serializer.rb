class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total, :identifier, :status
  has_one :user
end
