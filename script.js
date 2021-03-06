const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const newYears = '1 Jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const tseconds = new Date(newYearsDate - currentDate) / 1000;
    const days = Math.floor(tseconds / 3600 / 24);
    const hours = Math.floor(tseconds / 3600) % 24;
    const minutes = (Math.floor(tseconds / 60) % 24) % 60;
    const seconds = Math.floor(tseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secsEl.innerHTML = formatTime(seconds);

    console.log(days, hours, minutes, seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
setInterval(countdown, 1000);
countdown();
