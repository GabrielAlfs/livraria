const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const { sequelize } = require('./models/index');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(routes);

console.log('[DB 💾] Connecting to the database...');
sequelize.sync().then(() => {
    console.log('[DB 💾] Connected to the database.');
    const port = process.env.PORT || 8081;
    app.listen(port, () => {
        console.log(`[API 🤖] Listening on port ${port} ✅.`);
    });
}).catch(err => {
    console.error('[DB 💾] Unable to connect to the database 🚨', err);
});