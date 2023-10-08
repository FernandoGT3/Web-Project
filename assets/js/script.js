function updateClock (){
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `Horas: ${hours}:${minutes}:${seconds}`;

    document.querySelector('#clock').innerText = timeString;
}

function updateDate (){
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();

    const dateString = `Data: ${day}/${month}/${year}`;

    document.querySelector('#date').innerText = dateString;
}

function fetchAnalogClock (){

}

setInterval(updateClock, 1000);
setInterval(fetchAnalogClock, 1000);

updateClock();
updateDate();
fetchAnalogClock();
