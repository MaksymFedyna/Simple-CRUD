const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app.js');

dotenv.config();

const DB = process.env.DATABASE_URl;

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});