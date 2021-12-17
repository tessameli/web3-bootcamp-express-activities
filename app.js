const express = require('express');

const app = express();

const products = [
    {
        id: 1,
        name: 'Playstation',
        price: 4000,
        description: 'It is a videogames console.',
        stock: 155,
    },
    {
        id: 2,
        name: 'Switch',
        price: 3000,
        description: 'It is a videogames console.',
        stock: 101,
    },
    {
        id: 3,
        name: 'Xbox',
        price: 3800,
        description: 'It is a videogames console.',
        stock: 76,
    },
    {
        id: 4,
        name: 'PC GAMER',
        price: 9999,
        description: 'It is a PC GAMER.',
        stock: 999,
    }
];

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/products', (req, res) => {
    res.json(products);
});


app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000...");
})