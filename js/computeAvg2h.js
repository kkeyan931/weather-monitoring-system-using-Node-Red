var currentTime = new Date().getTime();
var bool = 0;
if (!context.lastTime) { // initialization of variables
context.lastTime = currentTime; context.sumt = msg.payload.tempc; context.sumh = msg.payload.humidity; context.count = 1;
}
if (currentTime-context.lastTime > 7200000) { // if 2 hours passed, compute average
// calculate average for temperature & humidity
context.averaget = context.sumt / context.count; context.averageh = context.sumh / context.count; // start tracking average again
context.sumt = msg.payload.tempc; context.sumh = msg.payload.humidity; context.count = 1;
context.lastTime = currentTime;
bool = 1; } else {
context.sumt += msg.payload.tempc; context.sumh += msg.payload.humidity; context.count +=1;
}
if (bool == 1){ // if 2 hours passed write averages in table along with the current date and time in Cairo
var currentDateΤime = new Date();
var monthDateYear = (currentDateΤime.getDate()) + '/' + (currentDateΤime.getMonth() + 1) + '/' + currentDateΤime.getFullYear();
monthDateYear = "'" + monthDateYear + "'";
var time = currentDateΤime.getHours() + ':'+ ((currentDateΤime.getMinutes() < 10) ? ("0" + currentDateΤime.getMinutes()) : (currentDateΤime.getMinutes()));
time = "'" + time + "'";
msg = {"topic": "INSERT INTO averages (date,time,av_temp, av_humidity) VALUES ("+ monthDateYear +","+ time +","+ context.averaget +","+ context.averageh +")" }
bool = 0;
}
return msg;
