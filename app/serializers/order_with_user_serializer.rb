class OrderWithUserSerializer < ActiveModel::Serializer
  attributes :id, :total, :identifier
  has_one :user
end
