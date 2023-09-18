function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h; // if hours are < 10, "0" + hours, else hours
    m = (m < 10) ? "0" + m : m; // if mins are < 10, "0" + mins, else mins
    s = (s < 10) ? "0" + s : s; // if secs are < 10, "0" + secs, else secs

    let time = h + ':' + m + ':' + s + " " + session; 

    document.getElementById('MyClockDisplay').innerText = time;

    document.getElementById('MyClockDisplay').textContent = time;

    setTimeout(showTime, 1000);
}

showTime();
