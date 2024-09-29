// script.js
let startTime, updatedTime, difference, tInterval, running = false;
let lapNumber = 1;

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds;
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    document.getElementById("display").innerHTML = "00:00:00";
    lapNumber = 1;
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (running) {
        let lapTime = document.getElementById("display").innerHTML;
        let lapList = document.getElementById("laps");
        let listItem = document.createElement("li");
        listItem.textContent = "Lap " + lapNumber + ": " + lapTime;
        lapList.appendChild(listItem);
        lapNumber++;
    }
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

