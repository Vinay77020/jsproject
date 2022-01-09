// display date and time

var date = new Date(2017,2,12,9,25,30);
var n = date.toDateString();
var time = date.toLocaleTimeString();
console.log('Date:' + n);
console.log('Time:' + time);