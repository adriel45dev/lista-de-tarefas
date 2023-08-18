# Lista de tarefas 

Exemplo 1: Armazenar e Recuperar Dados Simples
javascript
Copy code
// Armazenar um valor no LocalStorage
localStorage.setItem('nome', 'João');

// Recuperar o valor do LocalStorage
const nomeArmazenado = localStorage.getItem('nome');
console.log(nomeArmazenado); // Saída: João
Neste exemplo, um valor simples é armazenado no LocalStorage com a chave 'nome' e depois recuperado usando localStorage.getItem().

Exemplo 2: Armazenar Configurações de Usuário
javascript
Copy code
// Armazenar configurações de usuário
const config = {
  tema: 'escuro',
  idioma: 'português'
};
localStorage.setItem('configuracoes', JSON.stringify(config));

// Recuperar e usar as configurações
const configArmazenada = localStorage.getItem('configuracoes');
const configObj = JSON.parse(configArmazenada);
console.log(configObj.tema); // Saída: escuro
console.log(configObj.idioma); // Saída: português
Neste exemplo, um objeto de configurações é armazenado no LocalStorage após ser convertido em uma string JSON usando JSON.stringify(). As configurações são então recuperadas, transformadas de volta em um objeto e usadas.

Exemplo 3: Manter um Carrinho de Compras
javascript
Copy code
// Adicionar um item ao carrinho
const item = {
  nome: 'Camiseta',
  preco: 20
};

// Recuperar o carrinho do LocalStorage (se existir)
const carrinhoArmazenado = localStorage.getItem('carrinho');
const carrinho = carrinhoArmazenado ? JSON.parse(carrinhoArmazenado) : [];

// Adicionar o novo item ao carrinho
carrinho.push(item);

// Armazenar o carrinho atualizado no LocalStorage
localStorage.setItem('carrinho', JSON.stringify(carrinho));

console.log(carrinho); // Mostra o carrinho com os itens
Neste exemplo, um carrinho de compras é simulado com um objeto item, que é adicionado ao carrinho existente no LocalStorage. O carrinho é recuperado, atualizado e armazenado novamente usando JSON.

Exemplo 4: Limpar Dados
javascript
Copy code
// Remover um item do LocalStorage
localStorage.removeItem('nome');

// Limpar todo o LocalStorage
localStorage.clear();
Neste exemplo, um item específico é removido do LocalStorage usando localStorage.removeItem(), ou todos os dados armazenados são limpos usando localStorage.clear().
