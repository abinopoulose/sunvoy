const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/', homeRoutes);
app.use('/', authRoutes);
app.use('/', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});