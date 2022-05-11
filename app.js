const db = require('./DB/db');
const user = require('./routes/UserRoutes');
const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
app.use(cors(3001));
app.use(express.json());

//const logger = require('./logs/');
app.use('/user', user);

// db.connect();
app.listen(port, () => {
  console.log(`final project🌠🌠🌠🌠${port}`);
});