
let countdown = setInterval(timeCounter, 1000);


function timeCounter() {
    let deadline = new Date("jun 06, 2020 21:00:00").getTime();
    let now = new Date().getTime();
    let timeLeft = new Date(deadline - now);

    let day = Math.floor(timeLeft.getTime()/(1000*60*60*24));
    let hour = timeLeft.getHours();
    let minute = timeLeft.getMinutes();//Math.floor(timeLeft%(1000*60*60*24)/(1000*60));
    let second = timeLeft.getSeconds();

   
    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;

    if (timeLeft.getTime() === 0) {
        clearInterval(countdown)
    }


}
timeCounter();

