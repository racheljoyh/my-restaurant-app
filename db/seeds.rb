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
c4 = Category.create(title: 'Beverage')


puts 'Creating dishes...'

# 40.times{Dish.create(title: Faker::Food.dish, price: Faker::Commerce.price, description: Faker::Food.description, image: sample.jpg, category: Category.all.sample)}

# Starters
d1 = Dish.create(title: 'Crab Rangoon', price: 6.99, image: "https://dinnerthendessert.com/wp-content/uploads/2018/04/Crab-Rangoon-1.jpg", description: "Fried wontons with cream cheese, onion and celery", category_id: c1.id)
d4 = Dish.create(title: 'Pot Stickers', price: 5.99, description: "Dumplings filled with ground chicken OR vegetables", image: 'https://static01.nyt.com/images/2016/01/25/dining/25COOKING_POTSTICKERSFAST/25COOKING_POTSTICKERSFAST-master768.jpg?w=1280&q=75', category_id: c1.id)
d3 = Dish.create(title: 'Guay Chai' , price: 5.99, description: "Pan fried chive-filled dumplings with sweet & spicy soy sauce", image: 'https://highheelgourmet.files.wordpress.com/2012/02/garlic-chive-dumplings-kanom-gu-chai-by-the-high-heel-gourmet.jpg?w=788&h=522', category_id: c1.id)
d4 = Dish.create(title: 'Edamame' , price: 5.99, description: "Steamed and lightly salted green soy beans", image: 'https://www.thespruceeats.com/thmb/AiXzmGXp3_2csJL8Rv4O_zj7WTg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/boiled-edamame-2030953-hero-01-287898b35fa74d6b83f22e7cc7094658.jpg', category_id: c1.id)

# Entrees
d5 = Dish.create(title: 'Red Curry' , price: 11.99, description: "Curry with coconut milk, Thai basil, bamboo shoots and bell pepper", image: "https://www.modernhoney.com/wp-content/uploads/2020/11/Thai-Red-Chicken-Curry-6-scaled.jpg", category_id: c2.id)
d6 = Dish.create(title: 'Pad Ba Mee' , price: 14.99, description: "Egg noodles stir-fried with egg and vegetables in house sauce", image: 'https://therealparkridge.com/wp-content/uploads/2020/02/Sri-Siam-pad-ba-mee-web-e1587757958533-660x400.jpg', category_id: c2.id)
d7 = Dish.create(title: 'Panang Noodles' , price: 14.99, description: "Wide rice noodles with bell pepper and carrots in panang curry", image: 'https://www.2foodtrippers.com/wp-content/uploads/2021/12/Thai-Panang-Curry-Noodles-with-Meat-Sauce-Up-Close-735x490.jpg.webp', category_id: c2.id)
d8 = Dish.create(title: 'Bangkok Chicken' , price: 13.99, description: "Fried chicken stir-fried with bell pepper, baby corn, cabbage, onion, mushrooms and cashews
in brown sauce", image: 'https://www.foodandwine.com/thmb/4Cf8Pb0PH1gd0ORh6uoD58g6Qug=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201111-r-xl-sweet-sour-bangkok-chicken-950c83c9d2254842ae113cb243154d84.jpg', category_id: c2.id)
d9 = Dish.create(title: 'Basil Fried Rice' , price: 14.99, description: "Spicy fried rice with fresh Thai Basil leaves, onion and bell pepper", image: 'https://i0.wp.com/wholesomegoals.com/wp-content/uploads/2021/02/Delicious-Chicken-Thai-Basil-Fried-Rice-is-served-and-ready-to-eat.jpg?w=900&ssl=1', category_id: c2.id)
d10 = Dish.create(title: 'Pad Ka Pow' , price: 13.99, description: "", image: 'https://glebekitchen.com/wp-content/uploads/2019/11/thaibasilchickentopbowl-1.jpg', category_id: c2.id)

# Bevrages
d15 = Dish.create(title: 'Thai Iced - Tea' , price: 2.99, description: "Our specialty, thai iced tea", image: 'https://takestwoeggs.com/wp-content/uploads/2021/10/Thai-Iced-Tea-Takestwoeggs-FINAL-Sq.jpg', category_id: c4.id)
d16 = Dish.create(title: 'Chrysanthemum and Assorted Hot Tea' , price: 1.99, description: "Assorted teas", image: 'https://cdn.shopify.com/s/files/1/0002/9317/5359/products/Chrysanthemum_infusion_1024x.jpeg?v=1658843574', category_id: c4.id)
d17 = Dish.create(title: 'Coffee' , price: 1.99, description: "Freshly brewed coffee", image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg', category_id: c4.id)



# Desserts 
d11 = Dish.create(title: 'Mango & Sticky Rice ' , price: 9.99, description: "Mango slices served with sticky or red sticky rice", image: 'https://takestwoeggs.com/wp-content/uploads/2021/07/Thai-Mango-Sticky-Rice-Takestwoeggs-Process-Final-sq.jpg', category_id: c3.id)
d13 = Dish.create(title: 'Baked Taro Custard' , price: 7.99, description: "Taro custard baked to perfection", image: 'https://img.herstory.co.id/articles/archive_20221118/taro-custard-cake-20221118-091845.webp', category_id: c3.id)
d14 = Dish.create(title: 'Banana in Coconut Cream' , price: 6.99, description: "Fresh bananas drizzled with coconut cream", image: 'https://i0.wp.com/www.brasswok.com/wp-content/uploads/2015/12/banana-coconut-cream.jpg?resize=640%2C400&ssl=1', category_id: c3.id)


puts 'Creating Users...'
# 10.times{User.create(first_name:Faker::Name.first_name, last_name: Faker::Name.last_name, email:Faker::Internet.free_email, user_name: Faker::Internet.user('username'), phone_number: Faker::PhoneNumber.cell_phone)}

u1 = User.create(first_name: 'John', last_name: 'Doe', email: 'johndoe@example.com', username: 'johnnyboy', password: '1434')
u4 = User.create(first_name: 'Rachel', last_name: 'Humes', email: 'weechal@example.com', username: 'weechal', password: 'hello', role: 'admin')


puts "Done!"