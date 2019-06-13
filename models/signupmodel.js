const mongoose = require('mongoose');

const UserSignupSchema = new mongoose.Schema({
  firstName: { type: String , required: true},
  lastName: { type: String, required: true },
  emailId: { type: String , unique: true },
  Password: { type: String }
})

mongoose.model('userauthen', UserSignupSchema)
