const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.post('/users/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.status(201).send({ message: 'User registered successfully!' });
});

app.post('/users/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).send({ message: 'Login successful!' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

app.listen(3001, () => console.log('User Service running on port 3001'));
