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
}

$(document).ready(initializeTimer);
