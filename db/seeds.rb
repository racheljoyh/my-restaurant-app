# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  Category.destroy_all
  Dish.destroy_all
  User.destroy_all
 
puts 'Creating categories...'

# 3.times{Category.create(title: Faker::Restaurant.type)}

c1 = Category.create(title: 'Starter')
c2 = Category.create(title: 'Entree')
c3 = Category.create(title: 'Dessert')


puts 'Creating dishes...'

# 20.times{Dish.create(title: Faker::Food.dish, price: Faker::Commerce.price, description: Faker::Food.description, image: sample.jpg, category: Category.all.sample)}

d1 = Dish.create(title: 'WonTons', price: 6.99, description: "Fdijljds jdflkjaf lkjdfkjdfdfff d dfsd", image: 'https://iamhomesteader.com/wp-content/uploads/2020/04/cream-cheese-wontons-2.jpg', category_id: c1.id)
d2 = Dish.create(title: 'Pho', price: 10.99, description: "Fdijljds jdflkjaf lkjdfkjdfdfff d dfsd", image: 'https://www.allrecipes.com/thmb/EMxKl_B3I5H0J16SglkDbncGYkU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/62808_VietnameseBeef-NoodleSoup365-S-Jennifer-Causey-a60cd6ff5aad4407b896aefede659928.jpg', category_id: c2.id)
d3 = Dish.create(title: 'Mango Rice' , price: 4.99, description: "Fdijljds jdflkjaf lkjdfkjdfdfff d dfsd", image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2022-04-Sticky-rice-with-mango%20%2F_overhead2', category_id: c3.id)

puts 'Creating Users...'
# 10.times{User.create(first_name:Faker::Name.first_name, last_name: Faker::Name.last_name, email:Faker::Internet.free_email, user_name: Faker::Internet.user('username'), phone_number: Faker::PhoneNumber.cell_phone)}

u1 = User.create(first_name: 'John', last_name: 'Doe', email: 'johndoe@example.com', username: 'johnnyboy', password: '1234')
u2 = User.create(first_name: 'Rachel', last_name: 'Humes', email: 'weechal@example.com', username: 'weechal', password: 'hello', role: 'admin')


puts "Done!"