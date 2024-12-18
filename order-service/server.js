const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

let orders = [];

app.post('/orders', async (req, res) => {
    const { userId, productId } = req.body;
    try {
        const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
        const productResponse = await axios.get(`http://localhost:3002/products/${productId}`);

        if (userResponse && productResponse) {
            orders.push({ userId, productId });
            res.status(201).send({ message: 'Order placed successfully!' });
        }
    } catch (error) {
        res.status(400).send({ message: 'Failed to place order', error: error.message });
    }
});

app.listen(3003, () => console.log('Order Service running on port 3003'));
