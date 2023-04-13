# pratica-tasklist-mongodb

Você está trabalhando em um startup e a sua API tem endpoints relativos ao produto da empresa que é um Tasklist (tasks).

Depois de ver como async/await deixa o código muito mais legível que deixar várias promessas umas dentros das outras, você decidiu refatorar o sistema para que fosse utilizado async/await em todos os lugares possíveis.

Você também percebeu que o estagiário, apagou sem querer a parte de conexão do mongodb dentro do arquivo `app.js`

### Requisitos

Abaixo está a descrição do que deve ser feito:

- [ ]  Implementar conexão com o mongo dentro do arquivo `src/app.js`
- [ ]  A conexão com o mongoClient deve ser colocada na `const db` no arquivo `app.js`
- [ ]  Remover todos os `then` e `catch`, substituindo por `Async/Await` e `Try/Catch`
- [ ]  Implementar a função de cadastrar task da rota `POST /tasks`
    - Abaixo segue o formato do cadastro do objeto da tasks
    
```jsx
{
  titulo: "Fazer bolo",
  descricao: "Devo ir no mercado comprar leite, massa de bolo e achocolatado",
}
```

### Requisito Bônus

- [ ]  Implementar a rota de deltar task

Para conseguir testar se tudo está funcionando, você precisará:

1. Rodar o banco de dados em um terminal
2. Rodar a aplicação em outro terminal
3. Utilizar o ThunderClient para fazer as requisições.

O formato dos dados esperados para uma task é:

- titulo, string;
- descricao, string;
