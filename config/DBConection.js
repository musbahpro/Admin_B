const mongoose = require("mongoose");
require('dotenv').config();


const DB_URL = process.env.DB_URL;

function DBConection() {
mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected  ^_^ the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
}
module.exports = DBConection