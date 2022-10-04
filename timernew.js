const startingMinutes = 30;
let time = startingMinutes * 60;

const countdownElement = document.getElementById("timer")

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countdownElement.innerHTML = `${minutes}:${seconds}`;
    time--;
}

const stopButton = document.getElementById("button-stop");
stopButton.addEventListener("click", stopTimer);

function stopTimer(){
    clearInterval(time);
}