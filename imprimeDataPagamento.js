const imprimePagamentos = (pagamentosFiltro) => {
    pagamentosFiltro.forEach(pagamento => {
        const nome = pagamento.nome;
        const diaSemana = pagamento.diaSemana;
        const dataFeriado = pagamento.data;
        const valor = pagamento.valor;

        console.log(`${nome.toUpperCase()} no valor de R$ ${valor}, cairá no(a): ${diaSemana},  ${dataFeriado}`);
    });
}
export default imprimePagamentos;