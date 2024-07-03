let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let result1 = document.querySelector('div#result');
let p3 = document.createElement('p');
p3.textContent = "天気 = " + data.weather[0].description; 
result1.insertAdjacentElement('afterend', p3);
let p2 = document.createElement('p');
p2.textContent = "最低気温 = " + data.main.temp_min;
result1.insertAdjacentElement('afterend', p2);
let p1 = document.createElement('p');
p1.textContent = "最高気温 = " + data.main.temp_max;
result1.insertAdjacentElement('afterend', p1);
let p = document.createElement('p');
p.textContent = "都市 = " + data.name;
result1.insertAdjacentElement('afterend', p);




