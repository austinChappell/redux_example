require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const DB = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4000;

mongoose.connect(DB);

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
})