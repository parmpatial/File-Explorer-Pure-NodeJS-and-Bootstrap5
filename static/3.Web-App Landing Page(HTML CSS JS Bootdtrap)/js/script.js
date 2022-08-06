var endDate = new Date().getTime() + 1000500000;

var x = setInterval(function() {

    var now = new Date().getTime();
    var timeRemaining = endDate - now

    var dayR = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    var hourR = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    var minutesR = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60))
    var secondR = Math.floor(timeRemaining % (1000 * 60) / (1000))
    document.getElementById("days").innerHTML = dayR
    document.getElementById("hours").innerHTML = hourR
    document.getElementById("minutes").innerHTML = minutesR
    document.getElementById("seconds").innerHTML = secondR
    if (timeRemaining < 0) {
        clearInterval(x)
        document.getElementById("days").innerHTML = '0'
        document.getElementById("hours").innerHTML = '0'
        document.getElementById("minutes").innerHTML = '0'
        document.getElementById("seconds").innerHTML = '0'
    }
}, 1000)