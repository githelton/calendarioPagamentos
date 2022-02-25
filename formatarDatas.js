const formataDiaSemana = (dataPagamento) => {
    let diasDaSemana = ['Domingo', 'Segunda-feira','Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasDaSemana[dataPagamento.getDay()];
}
const formataDataPagamento = (dataPagamento) => {
    const diaPagamento = dataPagamento.getDate();
    const mesPagamento = dataPagamento.getMonth()+1;
    const anoPagamento = dataPagamento.getFullYear();

    const dataExibicao = diaPagamento+'/'+mesPagamento+'/'+anoPagamento;
    return dataExibicao;
}
export {formataDiaSemana, formataDataPagamento};