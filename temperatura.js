const cidade = "Curitiba";
const tempCelsius = 18.5;

const tempFahreheint = tempCelsius * (9 / 5 + 32);
const tempKelvin= tempCelsius + 273.15;
const variacaoDiaria = 26.3 - tempCelsius;

console.log(`Temperatura em ${cidade} hoje está ${tempCelsius}`);
console.log(`Celsius: ${tempCelsius} Cº`);

console.log( )

console.log(`Temperatura em ${cidade} hoje está ${tempFahreheint}`);
console.log(`Fahreheint: ${tempFahreheint} Fº`);

console.log( )

console.log(`Temperatura em ${cidade} hoje está ${tempKelvin}`);
console.log(`Kelvin: ${tempKelvin} Kº`);

console.log( )

console.log(`\nVarição prevista ${variacaoDiaria.toFixed(1)}  Cº`);