const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./configs/mongodbConnection');
const urlRoutes = require('./routes/urlRoutes');
const { sanitizeInput } = require('./middlewares/sanitizeInput');
const limiter = require('./middlewares/rateLimitter');
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(sanitizeInput);
app.use(limiter);

app.use('/', urlRoutes);

app.get('/', (req, res) => {
    connectDB();
    res.send("Hello World");
})

app.use((error, req, res, next) => {
    console.log(error);
    res.send("Some Error Occured");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})