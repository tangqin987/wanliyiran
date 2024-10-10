require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const API_KEY = process.env.API_KEY || require('./config').API_KEY;

function generateToken(apiKey, expSeconds) {
    const [id, secret] = apiKey.split('.');
    const header = {
        alg: 'HS256',
        sign_type: 'SIGN'
    };
    const payload = {
        api_key: id,
        exp: Math.floor(Date.now() / 1000) + expSeconds,
        timestamp: Math.floor(Date.now() / 1000)
    };

    const jwt = require('jsonwebtoken');
    return jwt.sign(payload, secret, { header });
}

app.post('/api/chat', async (req, res) => {
    try {
        const token = generateToken(API_KEY, 3600);
        const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'glm-4',
                messages: req.body.messages
            })
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});