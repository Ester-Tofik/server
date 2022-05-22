const db = require('./DB/db');
const user = require('./routes/UserRoutes');
const reminder = require('./routes/reminderRoutes');
const medicines = require('./routes/medicinesRoutes');
const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')
app.use(cors(3001));
app.use(express.json());

//const logger = require('./logs/');
app.use('/user', user);
app.use('/reminder', reminder);
app.use('/medicines', medicines);
db.connect();
app.listen(port, () => {
  console.log(`final project🌠🌠🌠🌠${port}`);
});