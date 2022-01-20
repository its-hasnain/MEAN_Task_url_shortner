
const express = require('express');
const cors = require("cors");

const indexRouter = require('./routes/index');
const db = require('./config/connection');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', indexRouter);


app.listen(process.env.PORT || '5000', () => console.log(`Server is listening on port ${process.env.PORT || '5000'}`));