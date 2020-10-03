function sendData() {
    const elem = document.getElementById("static");
    let pos = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 1524) {
            clearInterval(id);
        } else {
            pos+= 3;
            elem.style.left = pos + 'px';
        }
    }
}