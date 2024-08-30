const express = require('express');
const app = express();

require('dotenv').config()

app.get('/', (req, res) => {
    res.send('WELCOME TO HOME ROUTE')
})

app.get('/html', (req, res) => {
    res.send('<h1>HTML WELCOME</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`SERVER IS LISTING ON PORT NO ${process.env.PORT}`);
})


