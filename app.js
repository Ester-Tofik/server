const db = require('./DB/db');
//const user = require('./routes/userRoutes');
const express = require('express');
const app = express();
const port = 3000;
//const logger = require('./logs/');

//app.use('/user', user);


db.connect();
app.listen(port, () => {
  console.log(`we love iceCream❤🤣😂 ${port}`);
});