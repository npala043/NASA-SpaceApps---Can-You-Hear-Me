const d1 = new Date(2020, 10, 4);
const d2 = new Date(2021, 9, 22);
let setDate = document.getElementById("date");
console.log(setDate);

function createDataset() {

    // const randomInteger = function (min, max) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // this.dataAmount = randomInteger(1000000, 5e+9);
    // this.distance = randomInteger(54600000, 401000000);

    this.dataAmount = randomInt(1000000, 5e+9);
    this.distance = randomInt(54600000, 401000000);
}

function randomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const speedOfLightKMPS = 300000;
const dataSet = new createDataset();
const timeTraveledMinutes = (dataSet.distance / (speedOfLightKMPS)) / 60;
//console.log(timeTraveledMinutes);



function sendData() {
    const elem = document.getElementById("static");
    let pos = 0;
    let randPos = randomInt(0,1524);
    console.log("random=" + randPos);
    
    const id = setInterval(frame, 10);

    function frame() {
        if (pos >= 1524) {
            pos = 1524;
            elem.style.left = pos + 'px';
            clearInterval(id);
            const eBtn = document.getElementById("MarsButton");
            eBtn.disabled = false;
        } else {
            pos += 15.24 / timeTraveledMinutes;
            elem.style.left = pos + 'px';

        }


    }
    const mBtn = document.getElementById("EarthButton");
    mBtn.disabled = true;
}
// https://github.com/hemantgoswami/ephemeris

function returnData() {
    const elem = document.getElementById("static");
    let pos = 1524;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos <= 0) {
            clearInterval(id);
            const mBtn = document.getElementById("EarthButton");
            mBtn.disabled = false;
        } else {
            pos -= 15.24 / timeTraveledMinutes;
            elem.style.left = pos + 'px';
        }
    }
    const eBtn = document.getElementById("MarsButton");
    eBtn.disabled = true;
}

