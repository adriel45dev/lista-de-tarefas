# LocalStorage

O **LocalStorage** é uma funcionalidade presente nos navegadores que permite que desenvolvedores armazenem informações no dispositivo do usuário de forma persistente. Isso significa que os dados permanecem disponíveis mesmo após a página ser recarregada ou o navegador ser fechado.

## Como Funciona

O LocalStorage opera com pares chave-valor, onde cada valor é armazenado associado a uma chave única. Os valores podem ser strings, o que o torna ideal para armazenar pequenas quantidades de dados, como configurações de usuário, preferências e estados temporários de aplicativos.

## Exemplos de Uso

### Armazenar Dados Simples

```
// Armazenar um valor no LocalStorage
localStorage.setItem('nome', 'João');

// Recuperar o valor do LocalStorage
const nomeArmazenado = localStorage.getItem('nome');
console.log(nomeArmazenado); // Saída: João

## Armazenar Configurações de Usuário
```// Armazenar configurações de usuário
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
```

## Manter um Carrinho de Compras

```// Adicionar um item ao carrinho
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


```
## Limpar Dados
```
// Remover um item do LocalStorage
localStorage.removeItem('nome');

// Limpar todo o LocalStorage
localStorage.clear();
```
## Site
(https://lista-js.netlify.app)[https://lista-js.netlify.app/]
