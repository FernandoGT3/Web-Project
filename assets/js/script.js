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

function getWeatherDatas (){
    const url = 'https://api.hgbrasil.com/weather?format=json-cors&key=4c9f9a6d&city_name=Caçapava,SP';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.results.temp;
            const description = data.results.description;
            const city = data.results.city;
            const wind = data.results.wind_speedy;
            const humidity = data.results.humidity;

            document.querySelector('#city').innerText = city;
            document.querySelector('#temp').innerText = `${temp}°C,`;
            document.querySelector('#description').innerText = description;
            document.querySelector('#wind').innerText = `Vento: ${wind}`;
            document.querySelector('#humidity').innerText = `Humidade: ${humidity}`;
        });
}

function getStockDatas (){
    const url = 'https://api.hgbrasil.com/finance?format=json-cors&key=4c9f9a6d';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dolar = data.results.currencies.USD.buy;
            const dolarvariation = data.results.currencies.USD.variation;

            const euro = data.results.currencies.EUR.buy;
            const eurovariation = data.results.currencies.EUR.variation;

            const peso = data.results.currencies.ARS.buy;
            const pesovariation = data.results.currencies.ARS.variation;

            const bitcoin = data.results.currencies.BTC.buy;
            const bitcoinvariation = data.results.currencies.BTC.variation;

            const ibovpsa = data.results.stocks.IBOVESPA.points;
            const ibovvariation = data.results.stocks.IBOVESPA.variation;

            const ifix = data.results.stocks.IFIX.points;
            const ifixvariation = data.results.stocks.IFIX.variation;
            

            document.querySelector('#dolar').innerText = `R$ ${dolar}`;
            document.querySelector('#dolarvariation').innerText = `${dolarvariation}%`;

            document.querySelector('#euro').innerText = `R$ ${euro}`;
            document.querySelector('#eurovariation').innerText = `${eurovariation}%`;

            document.querySelector('#peso').innerText = `R$ ${peso}`;
            document.querySelector('#pesovariation').innerText = `${pesovariation}%`;

            document.querySelector('#bitcoin').innerText = `R$ ${bitcoin}`;
            document.querySelector('#bitcoinvariation').innerText = `${bitcoinvariation}%`;

            document.querySelector('#ibovpsa').innerText = `${ibovpsa} pontos`;
            document.querySelector('#ibovvariation').innerText = `${ibovvariation}%`;

            document.querySelector('#ifix').innerText = `${ifix} pontos`;
            document.querySelector('#ifixvariation').innerText = `${ifixvariation}%`;

        });
}

setInterval(updateClock, 1000);
setInterval(fetchAnalogClock, 1000);
setInterval(getWeatherDatas, 300000); // 5 minutos
setInterval(getStockDatas, 300000); // 5 minutos

updateClock();
updateDate();
fetchAnalogClock();

getWeatherDatas();
getStockDatas();
