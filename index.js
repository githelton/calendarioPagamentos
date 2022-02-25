import imprimePagamentos from "./imprimeDataPagamento.js";
import retornaProximosPagamentos from "./retornaDataPagamento.js";
import entradaNumero from 'readline-sync';

let numeroPagamentos = entradaNumero.question('Digite a quantidade de Proximo(s) Pagamento(s): ');

console.log('\nOs '+numeroPagamentos+' próximos Pagamentos são:\n');

let proximosPagamentos = retornaProximosPagamentos(numeroPagamentos);
imprimePagamentos(proximosPagamentos);