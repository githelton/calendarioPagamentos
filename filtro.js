const filtraPagamentos = (pagamentos, numeroPagamentos) => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth()+1;
    const diaAtual = dataAtual.getDate();
  
    let proximosPagamentos = [];
    let novaDataPagamento;
    let dataAtualSemHoras;
    pagamentos.forEach(pagamento => {
        novaDataPagamento = new Date(pagamento.data + '/' +anoAtual);
        dataAtualSemHoras = new Date(anoAtual + '/' +mesAtual+ '/' +diaAtual);
        if(dataAtualSemHoras > novaDataPagamento){
            novaDataPagamento.setMonth(mesAtual);
        }
        proximosPagamentos.push({
            nome: pagamento.nome,
            data: novaDataPagamento
        });
    });
    proximosPagamentos = proximosPagamentos.sort((a,b) => a.data - b.data);
    proximosPagamentos = proximosPagamentos.slice(0, numeroPagamentos);
    return proximosPagamentos;
}
export default filtraPagamentos;