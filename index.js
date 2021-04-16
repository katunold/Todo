const express = require('express');

const app = express();
console.log('Starting Server ....')

app.listen(3000, 'localhost', () => console.log('Server Started Successfully 🎊'))
