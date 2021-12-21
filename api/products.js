const express = require('express');
const router = express.Router();

let products = [
    {id: 1, name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    {id: 2, name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    {id: 3, name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    {id: 4, name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    {id: 5, name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    {id: 6, name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    {id: 7, name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    {id: 8, name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    {id: 9, name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    {id: 10, name: 'Monitor', price: 200, quantity: 3, colors: [] },
];

// punto 1
router.get('/products', (req,res) => {
    try{
        let productsList = products.map((prod) => ({...prod, price: `$${prod.price}`}));
        res.status(200).json(productsList);
    }
    catch{
        res.status(500).send('paso algo malo :(');
    }
});

// punto 2
router.get('/product/:id', (req,res) => {
    try{
        const id = Number(req.params.id);
        let product = products.find((prod) => prod.id === id);
        
        res.status(200).send(product);
    }
    catch{
        res.status(500).send('paso algo malo :(');
    }
});

// punto 3
router.post('/product', (req,res) => {
    try{
        let newProduct = {
            ...req.body,
            id: products.length + 1,
        }
        products.push(newProduct);
    
        res.status(200).send(`El producto '${newProduct.name}' fue agregado con éxito!`);
    }
    catch{
        res.status(500).send('paso algo malo :(');
    }
});

// punto 4 
router.put('/product/:id', (req,res) => {
    try{
        const id = Number(req.params.id);
        const changes = req.body;

        let productIndex = products.findIndex((prod) => prod.id === id);
        
        for (let key in body) {
            products[productIndex][key] = body[key];
          }
        
        res.status(200).send(`El producto con id '${id}' ha sido modificado con éxito!`);
    }
    catch{
        res.status(500).send('paso algo malo :(');
    }
});

// punto 5
router.delete('/product/:id', (req,res) => {
    try{
        const id = Number(req.params.id);

        products = products.filter((product) => product.id !== id);

        res.status(200).send(`El producto con id '${id}' ha sido eliminado con éxito!`);
    }
    catch{
        res.status(500).send('paso algo malo :(');
    }
});

module.exports = router;