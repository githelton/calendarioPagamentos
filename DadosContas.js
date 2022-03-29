let dataAtual = new Date();
let mesAtual = dataAtual.getMonth()+1;
const DatasdePagamentos = [
    {nome: 'Energia Comercial', data: mesAtual+'/7', valor: 198.20},
    {nome: 'Energia Residencial', data: mesAtual+'/7', valor: 308.00},
    {nome: 'DAS', data: mesAtual+'/20', valor: 66.00},
    {nome: 'AFEAM', data: mesAtual+'/01', valor: 948.00},
    {nome: 'Fone Comercial', data: mesAtual+'/17', valor: 39.99},
    {nome: 'Fone K', data: mesAtual+'/26', valor: 29.99},
    {nome: 'Fone H', data: mesAtual+'/05', valor: 20.00},
    {nome: 'Internet Womp', data: mesAtual+'/10', valor: 210.00},
    {nome: 'Internet Wire', data: mesAtual+'/16', valor: 200.00},
    {nome: 'Água', data: mesAtual+'/10', valor: 35.22},
    {nome: 'Natura', data: mesAtual+'/11', valor: 126.73},
    //{nome: 'Natura', data: mesAtual+'/30', valor: 299.73},
    {nome: 'Avon', data: mesAtual+'/30', valor: 100.00},
    {nome: 'Cartão de Crédito K', data: mesAtual+'/4', valor: 810.20},
    {nome: 'Cartão de Crédito H', data: mesAtual+'/8', valor: 240.02},
    {nome: 'disneyEStar+', data: mesAtual+'/01', valor: 8.00},
];
export default DatasdePagamentos;