Rails.application.routes.draw do
  
  resources :categories
  resources :shopping_carts
  resources :reviews
  resources :dishes
  resources :orders
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
   # login/signup 
  get '/me', to: 'users#show'
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  patch '/edit_profile', to: 'users#update_profile'

   # order routes
  get 'user_orders/:user_id', to: 'orders#user_orders'
  post '/order/:user_id/:orderId/:price', to: 'sessions#create_order'

  # shopping cart
  get 'shopping_cart', to: 'sessions#shopping_cart'
  post 'new/:user_id/:dish_id', to: 'shopping_carts#new'
  delete '/delete/:user_id', to: 'shopping_carts#delete_all'
  delete '/destroy/:user_id/:dish_id', to: 'shopping_carts#delete_cart_item'

   # admin routes 
  get "/admin" => "administrators#show"
  get "/admin/dishes" => "administrators#dish_index"
  get "/admin/orders" => "administrators#order_index"
  get "/admin/orders/:id" => "administrators#order"
  get "/admin/users" => "administrators#user_index"
  get "/admin/categories" => "administrators#category_index"
  patch "/admin/orders/:order_id" => "administrators#update_status"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
