import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
dotenv.config();

// Faça a conexão com o mongodb aqui

// Coloque o mongoclient de conexão com o banco de dados nessa variavel
const db = null;

/* Tasks Routes */

// Retorna todas as tasks
app.get('/tasks', (req, res) => {
  db.collection('tasks').find().toArray().then(tasks => {
    res.send(tasks);
  }).catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

// Busca uma task pelo id
app.get('/tasks/:id', (req, res) => {
  const id = req.params.id;

  db.collection('tasks').findOne({ _id: new ObjectId(id) }).then(task => {
    if (!task) {
      return res.sendStatus(404);
    }

    res.send(task);
  }).catch(err => {
    console.error(err);
    res.sendStatus(500);
  });
});

// Cadastra uma task
app.post('/tasks', (req, res) => {

});

// Bônus
app.delete('tasks/:id', (req, res) => {

})

const PORT = 5005

app.listen(5005, () => {
  console.log(`Server is litening on port: ${PORT}`);
});
