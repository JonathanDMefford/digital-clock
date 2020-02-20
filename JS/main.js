function digitalClock() {
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var AMPM = 'AM';

    if (hours > 12) {
        hours = hours - 12;
        AMPM = 'PM';
    }

    if (hours == 0) {
        hours = 12;
    }

    if (mins < 10) {
        mins = '0' + mins;
    }

    if (secs < 10) {
        secs = '0' + secs;
    }


    document.getElementById("clock").innerHTML = hours + ":" + mins + ":" + secs + " " + AMPM;

    setInterval(digitalClock, 1000);
}
digitalClock();