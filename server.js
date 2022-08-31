const express = require('express');
const dotenv = require('dotenv');

//Load dotenv config variables
dotenv.config({path: './config/config.env'});

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`));