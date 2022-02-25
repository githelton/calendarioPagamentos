let dataAtual = new Date();
let mesAtual = dataAtual.getMonth()+1;
const DatasdePagamentos = [
    {nome: 'Energia Comercial', data: mesAtual+'/7'},
    {nome: 'Energia Residencial', data: mesAtual+'/7'},
    {nome: 'DAS', data: mesAtual+'/20'},
    {nome: 'AFEAM', data: mesAtual+'/01'},
    {nome: 'Fone Comercial', data: mesAtual+'/17'},
    {nome: 'Fone K', data: mesAtual+'/26'},
    {nome: 'Fone H', data: mesAtual+'/05'},
    {nome: 'Internet Wire', data: mesAtual+'/10'},
    {nome: 'Internet Womp', data: mesAtual+'/16'},
    {nome: 'Água', data: mesAtual+'/10'},
    {nome: 'Natura', data: mesAtual+'/3'},
    {nome: 'Natura', data: mesAtual+'/21'},
    {nome: 'Cartão de Crédito K', data: mesAtual+'/4'},
    {nome: 'Cartão de Crédito P', data: mesAtual+'/7'},
    {nome: 'Cartão de Crédito H', data: mesAtual+'/8'},
];
export default DatasdePagamentos;