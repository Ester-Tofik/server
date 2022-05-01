const db = require('./DB/db');
const user = require('./routes/userRoutes');
const port = 3000;


app.use('/user', user);

db.connect();
app.listen(port, () => {
    logger.info(`we love iceCream❤🤣😂 ${port}`);
});