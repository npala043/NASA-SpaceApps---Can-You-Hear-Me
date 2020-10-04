function createDataset() {
    const dataFormat = function(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
    
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const distanceFormat = function(dist) {
        dist /= 1000000;
        return `${dist.toFixed(2)} million km`;
    }

    const randomInteger = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
    this.dataAmount = randomInteger(1000000, 5e+9);
    this.formattedDataAmount = dataFormat(dataAmount);
    this.distance = distanceFormat(randomInteger(54600000, 401000000));
}

function outputTables() {

    const degradeData = function(data) {
        return data * 0.999;
    }

    const dataSet = new createDataset();

    document.write(`<div id="earth_info">`);
    document.write(`<table>`);
    document.write(`<caption>Data Sent</caption>`);
    document.write(`<tr>`);
    document.write(`<th>Amount</th>`);
    document.write(`<th>Data Integrity</th>`);
    document.write(`</tr>`);
    document.write(`<tr>`);

    document.write(`<td>${dataSet.dataAmount}</td>`);
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
    document.write(`<th>Time to Recipient (s)</th>`);
    document.write(`</tr>`);
    document.write(`<tr>`);

    document.write(`<td>${dataSet.distance}</td>`);
    document.write(`<td>${dataSet.distance/dataSet.dataAmount}</td>`);

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

    
    document.write(`<td>${degradeData(dataSet.dataAmount)}</td>`);
    document.write(`<td>Something%</td>`);

    document.write(`</tr>`);
    document.write(`</table>`);
    document.write(`</div>`)
}

outputTables();