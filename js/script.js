document.addEventListener("DOMContentLoaded", function () {
  // Get current UTC time
  var currentTime = new Date().toUTCString();
  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    currentTime;

  // Get current day of the week
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDayIndex = new Date().getUTCDay();
  var currentDay = daysOfWeek[currentDayIndex];
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
});
