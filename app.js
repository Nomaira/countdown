const countdown = () => {
    const setDate = new Date('June 10, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const countingDown = setDate - now;

    // Specifying Time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
 
    // Calculate the date
    const textDay = Math.floor(countingDown / day);
    const textHour = Math.floor((countingDown % day) / hour);
    const textMinute = Math.floor((countingDown % hour) / minute);
    const textSecond = Math.floor((countingDown % minute) / second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;


}

setInterval(countdown, 1000);