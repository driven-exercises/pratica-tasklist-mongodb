# pratica-tasklist-mongodb

Você está trabalhando em um startup e a sua API tem endpoints relativos ao produto da empresa que é um Tasklist (tasks).

Depois de ver como async/await deixa o código muito mais legível que deixar várias promessas umas dentros das outras, você decidiu refatorar o sistema para que fosse utilizado async/await em todos os lugares possíveis.

Você também percebeu que o estagiário, apagou sem querer a parte de conexão do mongodb dentro do arquivo `app.js`

Primeiramente crie a conexão novamente com o mongodb dentro do arquivo `src/app.js` colocando o `mongoclient` dentro da variável `db` que já está no código. Não esqueça de fazer essa conexão utilizando `async`/`await` e `try`/`catch`

Em segundo lugar refatore as funções das rotas de **tasks** do arquivo `src/app.js`, retirando `then` e `catch` para utilizar `async`/`await` dentro de blocos `try`/`catch`.

Por fim implemente a função da rota de cadastrar **tasks**

Para conseguir testar se tudo está funcionando, você precisará:

1. Rodar o banco de dados em um terminal
2. Rodar a aplicação em outro terminal
3. Utilizar o ThunderClient para fazer as requisições.

O formato dos dados esperados para uma task é:

- titulo, string;
- descricao, string;
