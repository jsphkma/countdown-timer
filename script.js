const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');


const newYears = "1 January 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 3600 / 24) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    console.log(days, hours, mins, seconds);


daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = mins;
secsEl.innerHTML = seconds;

}

// This is the initial call
countdown();

setInterval(countdown, 1000);

