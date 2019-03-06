const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('../src/controllers/authController')(app);

app.get('/', (req, res) => {
    res.send('api funfou');
});

app.listen(3000);