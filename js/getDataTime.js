var currentDateΤime = new Date();
var monthDateYear = (currentDateΤime.getDate()) + '/' + (currentDateΤime.getMonth() + 1) + '/' +
currentDateΤime.getFullYear()+'\t'+(currentDateΤime.getHours() < 10 ? "0" : "") + currentDateΤime.getHours() + ":" + (currentDateΤime.getMinutes() < 10 ? "0" : "") + currentDateΤime.getMinutes() + ":" + (currentDateΤime.getSeconds() < 10 ? "0" : "") + currentDateΤime.getSeconds();
msg.topic = monthDateYear;
return msg;
