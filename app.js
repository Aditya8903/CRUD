require('dotenv').config();
const express = require( 'express' );
const connectToDB = require('./config/db');
const app = express();
const cors = require( "cors" );
const userRoutes = require('./routes/userRoutes')


// *******************************//
// CONTROLLER->ROUTES->app.js
// *******************************//


//middlewares
app.use( express.json() );
app.use(express.urlencoded({ extended: true }));  // parse application/x-www-form-urlencoded
app.use(cors());                                // enable CORS


//db connection
connectToDB();

app.use('/',userRoutes)
module.exports = app;