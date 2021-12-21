const express = require('express');

const app = express();
app.use(express.json());

//routes
const productsRoute = require('./api/products');

// app.get('/', (req, res) => {
//     res.send("Hello world!");
// });

// app.get('/products', (req, res) => {
//     res.json(products);
// });

app.use('/api', productsRoute);

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000...");
})