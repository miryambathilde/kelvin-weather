// Current tempeture in kelvin degrees
const kelvin = 0;
//Converting kelvin to celsius
const celsius = kelvin - 273;
//convert celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//round with math.floor method
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
//round with math.floor method
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);