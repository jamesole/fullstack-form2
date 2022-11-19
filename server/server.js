const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const connectDB = require('./db/connect');
require('dotenv').config();


const formRouter = require('./routes/form');

app.use('/form', formRouter);

const start = async() => {
    try {
        await connectDB(process.env.URL);
        app.listen(8000, () => {
            console.log('Database + Server is up...')
        })
    }
    catch(error) {
        console.log(error);
    }
}

start();
