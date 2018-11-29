Rails.application.routes.draw do
  root "home#index"
  resources :plays, only: :create
end
