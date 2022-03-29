import DatasdePagamentos from "./DadosContas.js";
import filtraPagamentos from "./filtro.js";
import { formataDiaSemana,  formataDataPagamento } from "./formatarDatas.js";

const retornaProximosPagamentos = (numeroPagamentos) => {
    let pagamentosFiltro = filtraPagamentos(DatasdePagamentos, numeroPagamentos);
    let pagamentoFiltroFormatado = [];

    pagamentosFiltro.forEach(pagamento => {
        const dataPagamento = pagamento.data;
        let diaSemana = formataDiaSemana(dataPagamento);
        const dataPagamentoFormatado = formataDataPagamento(dataPagamento);

        pagamentoFiltroFormatado.push({
            nome: pagamento.nome,
            valor: pagamento.valor,
            diaSemana: diaSemana,
            data: dataPagamentoFormatado
        });
    });
    return pagamentoFiltroFormatado;
}
export default retornaProximosPagamentos;
