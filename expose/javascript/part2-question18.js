function printSeconds() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}

setInterval(printSeconds, 1000);