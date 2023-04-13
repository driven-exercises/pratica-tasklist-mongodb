# pratica-tasklist-mongodb

Você está trabalhando em um startup e a sua API tem endpoints relativos ao produto da empresa que é um Tasklist (tasks).

Depois de ver como async/await deixa o código muito mais legível que deixar várias promessas umas dentros das outras, você decidiu refatorar o sistema para que fosse utilizado async/await em todos os lugares possíveis.

Você também percebeu que o estagiário, apagou sem querer a parte de conexão do mongodb dentro do arquivo `app.js`

## 🎲 Formato dos Dados

As tarefas da aplicação devem possuir o seguinte formato:

```jsx
{
	titulo: "Fazer bolo",
	descricao: "Devo ir no mercado comprar leite, massa de bolo e achocolatado",
}
```

## ✅ Requisitos

- [ ]  Implementar conexão com o mongo dentro do arquivo `src/app.js`
    - [ ]  A conexão com o mongoClient deve ser colocada na `const db` no arquivo `app.js`
- [ ]  Remover todos os `then` e `catch`, substituindo por `Async/Await` e `Try/Catch`
- [ ]  Implementar a função de cadastrar task da rota **POST** `/tasks`
    - [ ]  Não permita que duas tasks com o mesmo título sejam adicionadas.
    - [ ]  Faça as validações para verificar se todos os campos do `body` existem.

## ☑️ Bônus

- [ ]  Implementar um endpoint que delete uma task à partir do seu id, **DELETE** `/task/:id`, lembrando-se de fazer um tratamento de erro caso o id informado não exista
- [ ]  Implemente as validações de todos os endpoints utilizando a biblioteca [joi](https://joi.dev/api/?v=17.9.1).


## 🧪 Testando o funcionamento da aplicação

Para conseguir testar se tudo está funcionando, você precisará:

1. Rodar o banco de dados em um terminal
2. Rodar a aplicação em outro terminal
3. Utilizar o ThunderClient para fazer as requisições.
