class HomeController < ApplicationController
  def index
    @plays = Play.all.order(:created_at)
  end
end
