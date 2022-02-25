const imprimePagamentos = (pagamentosFiltro) => {
    pagamentosFiltro.forEach(pagamento => {
        const nome = pagamento.nome;
        const diaSemana = pagamento.diaSemana;
        const dataFeriado = pagamento.data;

        console.log(`${nome.toUpperCase()} , que cairá no(a): ${diaSemana},  ${dataFeriado}`);
    });
}
export default imprimePagamentos;