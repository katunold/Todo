const express = require('express');

const app = express();
console.log('Starting Server ....')

const todos = [];

app.listen(3000, 'localhost', () => console.log('Server Started Successfully 🎊'))

app.get('/', (req,res) => {
  res.send('Welcome to our todo api demo 🎊')
});
