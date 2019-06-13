const mongoose = require('mongoose');

const User = mongoose.model('userauthen')

module.exports = (app) => {
  app.post('/signup', (req,res) => {
    const CreateUser = async() => {

            const createduser = new User({
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               emailId: req.body.emailId,
               password: req.body.password
          })
          const result =  await createduser.save()
          res.send(createduser+ "bhdb")
    }
    CreateUser()
  })


}
