
require('dotenv').config()
const express = require('express');
const routes = require('./routes');

const { connectToDB } = require('./utils/db');

const app = express();

app.use('/api', routes);


connectToDB().then(() => {
  app.listen(3000, () => {
    console.log("server listening");
  });

 })
 .catch(e => { console.error(e); process.exit(1) })

