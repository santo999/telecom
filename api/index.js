const express = require('express');
const config = require('../config.js');
const user = require ('./component/user/network');

const app = express();

// Routes
app.use('/api/user', user);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto', config.api.port);
});