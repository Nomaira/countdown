const countdown = () => {
    const setCount = new Date('June 10, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const countingDown = setCount - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour % 24;

    document.querySelector(".day").innerHTML = day;
    document.querySelector(".hour").innerHTML = day;
    document.querySelector(".minute").innerHTML = day;
    document.querySelector(".second").innerHTML = day;


}

setInterval(countdown, 1000);