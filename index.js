const express = require('express');
const app = express();
require('./middleware/middlewares')(app)
const mongoose = require('mongoose')
require('./models/signupmodel')
require('./routes/user')(app)

// require('./models/signinmodel')
// require('./routes/user')(app)

mongoose.connect('mongodb://localhost:27017/authentication')
.then(() => console.log('Connected to Mongodb'))
.catch((err) => console.log(err))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to ${port}`))
