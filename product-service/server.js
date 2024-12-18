const express = require('express');
const app = express();
app.use(express.json());

let products = [];

app.get('/products', (req, res) => {
    res.status(200).send(products);
});

app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).send({ message: 'Product added successfully!' });
});

app.listen(3002, () => console.log('Product Service running on port 3002'));
