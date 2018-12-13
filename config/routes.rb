Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :destroy, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :images, except: [:new, :edit]

    resources :users do
      resources :images, only: [:index]
    end
  end

  root "static_pages#root"
end
