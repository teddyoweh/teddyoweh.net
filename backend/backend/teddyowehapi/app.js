// app.js -t3:16 -e3:16 -d3:16
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./db');
var cors = require('cors')
const views = require('./routes/views');
const contacts = require('./routes/contact');
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();


app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/views', views);
app.use('/api/contacts', contacts);


app.get('/', function(req, res) {
    res.send('hello');
});

const PORT = process.env.PORT || 9990;

app.listen(PORT, () => {
    console.log(`Server is running on  :${PORT}`);
});