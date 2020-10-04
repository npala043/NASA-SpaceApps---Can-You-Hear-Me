function outputTables() {

    const dataFormat = function (bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const degradeData = function (data) {

        // Ideally this would accurately calculate data degradation
        // over x distance

        return data * 0.999;
    }

    const timeToRec = function (dist) {
        const date = new Date(0);
        date.setSeconds(dist / 300000); // specify value for SECONDS here
        const timeString = date.toISOString().substr(14, 5);
        return timeString;
    }

    document.write(`<div id="earth_info">`);
    document.write(`<table>`);
    document.write(`<caption>Data Sent</caption>`);
    document.write(`<tr>`);
    document.write(`<th>Amount</th>`);
    document.write(`<th>Data Integrity</th>`);
    document.write(`</tr>`);
    document.write(`<tr>`);

    document.write(`<td>${dataFormat(dataSet.dataAmount)}</td>`);
    document.write(`<td>100%</td>`);

    document.write(`</tr>`);
    document.write(`</table>`);
    document.write(`</div>`)
    //---------------------------------------------
    document.write(`<div id="path_info">`);
    document.write(`<table>`);
    document.write(`<caption>Path Conditions</caption>`);
    document.write(`<tr>`);
    document.write(`<th>Distance</th>`);
    document.write(`<th>Transit Time (mm:ss)</th>`);
    document.write(`</tr>`);
    document.write(`<tr>`);

    document.write(`<td>${(dataSet.distance / 1000000).toFixed(2)}m km</td>`);
    document.write(`<td>${timeToRec(dataSet.distance)}</td>`);

    document.write(`</tr>`);
    document.write(`</table>`);
    document.write(`</div>`)
    //---------------------------------------------
    document.write(`<div id="mars_info">`);
    document.write(`<table>`);
    document.write(`<caption>Data Received</caption>`);
    document.write(`<tr>`);
    document.write(`<th>Amount</th>`);
    document.write(`<th>Data Integrity</th>`);
    document.write(`</tr>`);
    document.write(`<tr>`);

    document.write(`<td>${dataFormat(degradeData(dataSet.dataAmount))}</td>`);
    document.write(`<td>99.9%</td>`);

    document.write(`</tr>`);
    document.write(`</table>`);
    document.write(`</div>`)
}

outputTables();

const msgOut = [{
    packetSize: "34234 bytes",
    signalStrength: "Good"
},
{
    packetSize: "12357 bytes",
    signalStrength: "Fair"
},
{
    packetSize: "56466 bytes",
    signalStrength: "Poor"
}
];

function eventList(msgOut) {

    document.write(`<div class="event_feed">`);
    document.write(`<ul>`)
    document.write(`<br/>`);
    for (let i = 0; i < msgOut.length; i++) {
        let pSize = msgOut[i].packetSize;
        let sStrength = msgOut[i].signalStrength;
        document.write(`<li> Packet Size: ${pSize} </li>`);
        document.write(`<li> Signal Strength: ${sStrength} </li>`);
        document.write(`<br/>`);
    }
    document.write(`</ul>`)
}

eventList(msgOut);