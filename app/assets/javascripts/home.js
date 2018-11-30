function initializeTimer() {
  var timerValue;
  var timer = $("#home_timer");

  function decrementTimer() {
    if (timerValue > 1) {
      timerValue = timerValue - 1;
    } else {
      timerValue = 10;
    }

    timer.html(timerValue);

    setTimeout(decrementTimer, 1000);
  };

  decrementTimer();

  function saveTimerValue() {
    $.ajax({
      url: "/plays",
      method: 'POST',
      data: {
        timer_value: timerValue
      },
      success: function(result) {
        $("#home_timer_table").append("<tr><td>" + result.data.play.timer_value + "</td></tr>");
      }
    });
  }

  var button = $("#home_timer_button");
  button.click(saveTimerValue);
}

$(document).ready(initializeTimer);
