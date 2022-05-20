let dataAtual = new Date();
let mesAtual = dataAtual.getMonth()+1;
const DatasdePagamentos = [
    {nome: 'Energia Comercial', data: mesAtual+'/7', valor: 245.32},
    {nome: 'Energia Residencial', data: mesAtual+'/7', valor: 121.63},
    {nome: 'DAS', data: mesAtual+'/20', valor: 66.60},
    {nome: 'AFEAM', data: mesAtual+'/01', valor: 948.00},
    {nome: 'Fone Comercial', data: mesAtual+'/17', valor: 44.99},
    {nome: 'Fone K', data: mesAtual+'/26', valor: 29.99},
    {nome: 'Fone H', data: mesAtual+'/05', valor: 20.00},
    {nome: 'Internet Womp', data: mesAtual+'/10', valor: 210.00},
    {nome: 'Internet Wire', data: mesAtual+'/16', valor: 200.00},
    {nome: 'Água', data: mesAtual+'/10', valor: 35.22},
    {nome: 'Natura', data: mesAtual+'/09', valor: 224.44},
    {nome: 'Natura', data: mesAtual+'/23', valor: 170.99},
    {nome: 'Tres Coracoes', data: mesAtual+'/27', valor: 161.40},
    {nome: 'Tres Coracoes', data: mesAtual+'/03', valor: 161.39},
    {nome: 'Bela City', data: mesAtual+'/25', valor: 192.58},
    {nome: 'Cartão de Crédito K', data: mesAtual+'/4', valor: 399.62},
    {nome: 'Cartão de Crédito H', data: mesAtual+'/8', valor: 378.50},
    {nome: 'disneyEStar+', data: mesAtual+'/01', valor: 8.00},
    
];
export default DatasdePagamentos;