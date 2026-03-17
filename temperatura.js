const cidade = "Curitiba";
const tempCelsius = 18.5;

const tempFahreheint = tempCelsius * (9 / 5 + 32);
const tempKelvin= tempCelsius + 273.15;
const variacaoDiaria = 26.3 - tempCelsius;

console.log(`Temperatura em ${cidade} hoje está ${tempCelsius}.`);
console.log(`Celsius: ${tempCelsius}`);

console.log(`Temperatura em ${cidade} hoje está ${tempFahreheint}.`);
console.log(`Temperatura em ${cidade} hoje está ${tempKelvin}.`);