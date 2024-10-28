// app.js
const { celsiusToFahrenheit } = require('./conversion');
const { kuadrat } = require('./mathUtils');

const celsiusTemp = 30;
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(`${celsiusTemp}°C adalah ${fahrenheitTemp}°F`);

const hasilKuadrat = kuadrat(fahrenheitTemp);
console.log(`Kuadrat dari ${fahrenheitTemp} adalah ${hasilKuadrat}`); // Output: Kuadrat dari 86 adalah 7396