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
    let month = now.getMonth();
    const day = now.getDate();
    let dayOfWeek = now.getDay();

    switch (dayOfWeek) {
        case 0:
            dayOfWeek = 'Domingo';
            break;
        case 1:
            dayOfWeek = 'Segunda-feira';
            break;
        case 2:
            dayOfWeek = 'Terça-feira';
            break;
        case 3:
            dayOfWeek = 'Quarta-feira';
            break;
        case 4:
            dayOfWeek = 'Quinta-feira';
            break;
        case 5:
            dayOfWeek = 'Sexta-feira';
            break;
        case 6:
            dayOfWeek = 'Sábado';
            break;
    }

    switch (month) {
        case 0:
            month = 'Janeiro';
            break;
        case 1:
            month = 'Fevereiro';
            break;
        case 2:
            month = 'Março';
            break;
        case 3:
            month = 'Abril';
            break;
        case 4:
            month = 'Maio';
            break;
        case 5:
            month = 'Junho';
            break;
        case 6:
            month = 'Julho';
            break;
        case 7:
            month = 'Agosto';
            break;
        case 8:
            month = 'Setembro';
            break;
        case 9:
            month = 'Outubro';
            break;
        case 10:
            month = 'Novembro';
            break;
        case 11:
            month = 'Dezembro';
            break;
    }

    const dateString = `${dayOfWeek}, ${day} de ${month} de ${year}`;

    document.querySelector('#date').innerText = dateString;
}

function fetchAnalogClock (){
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDegrees = ((hours / 12) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    document.querySelector('#hours-hand').style.transform = `rotate(${hoursDegrees}deg)`;
    document.querySelector('#minutes-hand').style.transform = `rotate(${minutesDegrees}deg)`;
    document.querySelector('#seconds-hand').style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(updateClock, 1000);
setInterval(fetchAnalogClock, 1000);

updateClock();
updateDate();
fetchAnalogClock();
