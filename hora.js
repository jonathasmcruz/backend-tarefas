let valorPorHora = 50;
let HorasTrabalhadas = 8;


console.log("--- Resumo do Expediente ---")
console.log(`Horas Iniciais: ${HorasTrabalhadas}h`)

HorasTrabalhadas++;
console.log(`Após hora extra (horasTrabalhadas++): ${HorasTrabalhadas}h`);

HorasTrabalhadas--;
console.log(` Após saída antecipada: ${HorasTrabalhadas}h`);

HorasTrabalhadas--;
console.log(`Após saída antecipadas (HorasTrabalhadas--): ${HorasTrabalhadas}h`);

let taxaSistema = 15;
let pagamentoTotal = (HorasTrabalhadas * valorPorHora) - taxaSistema;

console.log("\n--- Fechamento ---");
console.log(`Total a receber por ${HorasTrabalhadas}h: R$ ${pagamentoTotal}`)