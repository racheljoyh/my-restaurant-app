class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :shopping_cart
  has_many :dishes, through: :shopping_cart
  has_many :orders
  has_secure_password

  validates :first_name,  presence: true, length: { maximum: 50 }
  validates :last_name,  presence: true, length: { maximum: 50 }
  validates :email, presence: true, length: { maximum: 255 }
  validates :username, presence: true, uniqueness: true
end
