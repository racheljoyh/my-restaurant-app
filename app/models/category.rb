class Category < ApplicationRecord
  has_many :dishes, dependent: :nullify
end
