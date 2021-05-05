const daysIndicator = document.querySelector(".countdown-days-indicator");
const hoursIndicator = document.querySelector(".countdown-hours-indicator");
const minutesIndicator = document.querySelector(".countdown-minutes-indicator");
const secondsIndicator = document.querySelector(".countdown-seconds-indicator");

// helper
const formatDate = (value) => (value < 10 ? "0" + value : value);

const countDown = () => {
  let currentDate = new Date();
  const targetDate = new Date("2021/10/05");

  let totalSeconds = (targetDate - currentDate) / 1000;

  daysIndicator.textContent = formatDate(Math.floor(totalSeconds / 3600 / 24));
  hoursIndicator.textContent = formatDate(Math.floor(totalSeconds / 3600) % 24);
  minutesIndicator.textContent = formatDate(Math.floor(totalSeconds / 60) % 60);
  secondsIndicator.textContent = formatDate(Math.floor(totalSeconds) % 60);
};

countDown();

setInterval(countDown, 1000);
