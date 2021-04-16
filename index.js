const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log('Starting Server ....')

const todos = [];

app.listen(3000, 'localhost', () => console.log('Server Started Successfully 🎊'))

// Routes

app.get('/', (req,res) => {
  res.send('Welcome to our todo api demo 🎊')
});

app.get('/todos', (req, res) => {
  res.send({todos});
})

app.post('/todo', (req, res) => {
  const {task} = req.body;
  todos.push({task});
  res.send({todos});
})

app.put('/todo/:id', (req, res) => {
  const {id} = req.params;
  const { task } = req.body
  todos[id].task = task;
  res.send({message: 'Task updated successfully', todos});
})

app.delete('/todo/:id', (req, res) => {
  const {id} = req.params;
  todos.splice(id,1)
  res.send({message: 'Task deleted successfully', todos})
})


