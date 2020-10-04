function sendData() {
    const elem = document.getElementById("static");
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 1524) {
            clearInterval(id);
            const eBtn = document.getElementById("MarsButton");
            eBtn.disabled = false;
        } else {
            pos+= 3;
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
        if (pos == 0) {
            clearInterval(id);
            const mBtn = document.getElementById("EarthButton");
            mBtn.disabled = false;
        } else {
            pos-= 3;
            elem.style.left = pos + 'px';
        }
    }
    const eBtn = document.getElementById("MarsButton");
    eBtn.disabled = true;
}

// function dataHandler(id) {
//     if (id == "EarthButton") {
//         const eBtn = document.getElementById("EarthButton");
//         eBtn.disabled = true;
//         const mBtn = document.getElementById("MarsButton");
//         mBtn.disabled = false;
//     } else {
//         const eBtn = document.getElementById("EarthButton");
//         eBtn.disabled = false;
//         const mBtn = document.getElementById("MarsButton");
//         mBtn.disabled = true;
//     }
// }