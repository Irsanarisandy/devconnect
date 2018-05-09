const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const posts = require('./routes/api/posts');
const profiles = require('./routes/api/profiles');
const users = require('./routes/api/users');

const app = express();
const port = process.env.PORT || 5000;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/posts', posts);
app.use('/api/profiles', profiles);
app.use('/api/users', users);
app.listen(port, () => console.log(`Server running on port ${port}`));
