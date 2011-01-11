$(document).ready(function() {
setDate();
});

function setDate() {
var d = new Date();
var currentDate = ((d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear());
document.getElementById('date').value = currentDate;
}