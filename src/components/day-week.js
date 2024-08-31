const weekday = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

const d = new Date();
let day = weekday[d.getUTCDay()];

document.getElementById("date").innerHTML = day;

console.log(day);