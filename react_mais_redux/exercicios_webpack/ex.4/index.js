const produto = {
    nome : 'Caneta Bic Preta',
    preco: '1.99',
    desconto: '0.5'
}

function clone (obj) {
    return { ...obj }
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul';
console.log(produto, novoProduto);
