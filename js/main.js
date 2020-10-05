document.addEventListener("DOMContentLoaded", function () {

});

function createDataset() {
    this.dataAmount = randomInt(0, 5e+9);
    this.distance = findDistance(new Date()) * 1.496e+8;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateFeed(string) {
    const eventList = document.getElementsByTagName("ul");
    const msg = document.createElement("li");

    var d = new Date();
    var n = d.toLocaleTimeString();
    var msgTime = `[${n}]   `;

    msg.innerHTML = msgTime + string;
    msg.style.visibility = "visible";
    eventList[0].prepend(msg);
}

const speedOfLightKMPS = 300000;
const dataSet = new createDataset();
const timeTraveledMinutes = (dataSet.distance / (speedOfLightKMPS)) / 60;

function sendData() {
    // This "animates" the sending of the static ball,
    // as well as updating the feed at the bottom left
    // of the page in conjunction with returnData()
    
    const elem = document.getElementById("static");
    let pos = 0;
    const id = setInterval(frame, 10);

    const feed = document.getElementsByTagName("li")
    for (let e of feed) {
        e.style.visibility = "visible";
    }
    updateFeed("Sending Data...");

    function frame() {
        if (pos >= 1524) {
            pos = 1524;
            elem.style.left = pos + 'px';
            clearInterval(id);
            const eBtn = document.getElementById("MarsButton");
            eBtn.disabled = false;
            updateFeed("Data Sent Successfully!");
        } else {
            pos += 15.24 / timeTraveledMinutes;
            elem.style.left = pos + 'px';
        }
    }
    const mBtn = document.getElementById("EarthButton");
    mBtn.disabled = true;
}

function returnData() {
    const elem = document.getElementById("static");
    let pos = 1524;
    const id = setInterval(frame, 10);

    updateFeed("Sending Data...");

    function frame() {
        if (pos <= 0) {
            clearInterval(id);
            const mBtn = document.getElementById("EarthButton");
            mBtn.disabled = false;
            updateFeed("Data Received Successfully!");
        } else {
            pos -= 15.24 / timeTraveledMinutes;
            elem.style.left = pos + 'px';
        }
    }
    const eBtn = document.getElementById("MarsButton");
    eBtn.disabled = true;
}

function dateCalc() {
    const au = dateSetter(document.getElementById("date").value);
    // This would display the desired date on-screen and update
    // the distance/transit time to reflect the new date
}

function findDistance(date) {
    // Can approximate Earth<->Mars Distance between
    // roughly Oct 4, 2020 and Nov. 30, 2022
    // Math courtesy of Sushanth and Pedro, implemented
    // by Pedro and Nahuel

    const d1 = new Date(2020, 9, 3);
    const d2 = new Date(2021, 8, 22);

    if (date <= d2) {
        let dateDiff = Math.floor((date - d1) / (1000 * 60 * 60 * 24));
        let au = 1.11 * Math.cos(dateDiff * 2 * Math.PI / 708 + Math.PI) + 1.53;
        return au;
    } else {
        let dateDiff = Math.floor((date - d2) / (1000 * 60 * 60 * 24));
        let au = 1.05 * Math.cos(dateDiff * 2 * Math.PI / 868) + 1.59;
        return au;
    }
}