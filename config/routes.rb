Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  

resources :signups
resources :courses
resources :employees

post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"

post "/signup", to: "users#create"
get "/me", to: "users#show"

get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
