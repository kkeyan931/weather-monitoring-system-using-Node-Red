var currentDateΤime = new Date();
var monthDateYear = (currentDateΤime.getDate()) + '/' + (currentDateΤime.getMonth() + 1) + '/' +
currentDateΤime.getFullYear();
monthDateY ear = "'" + monthDateY ear + "'";
var time = (currentDateΤime.getHours() < 10 ? "0" : "") + currentDateΤime.getHours() + ":" + (currentDateΤime.getMinutes() < 10 ? "0" : "") + currentDateΤime.getMinutes() + ":" + (currentDateΤime.getSeconds() < 10 ? "0" : "") + currentDateΤime.getSeconds();
time="'"+time+"'";
var newMsg = { "topic": "INSERT INTO weather VALUES ( " + monthDateYear +"," + time + "," +
    msg.payload.tempc + ", " + msg.payload.humidity + ","+ msg.payload.pressure +")"}
return newMsg;
