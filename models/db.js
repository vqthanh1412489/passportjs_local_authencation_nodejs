const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/nodeAuth';
mongoose.connect(uri, { useNewUrlParser: true });