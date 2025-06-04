const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
const homeRoutes = require('./src/routes/homeRoutes');

const app = express();

app.use(express.json());

app.use('/', homeRoutes);
app.use('/', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});