class PlaysController < ApplicationController
  def create
    @play = Play.create(play_params)

    if @play
      render json: { play: @play }
    else
      reder json: { error: "Play could not be created." }, status: 400
    end
  end

  private
  def play_params
    params.require(:play).permit(:timer_value)
  end
end
