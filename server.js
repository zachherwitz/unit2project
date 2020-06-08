//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                              DEPENDENCIES                                //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                              CONFIGURATION                               //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

require('dotenv').config()
const app = express()
const db = mongoose.connection

// PORT
const PORT = process.env.PORT || 3333
// Database
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                            ERROR CATCHING                                //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                               MIDDLEWARE                                 //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

// use the public folder
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                         CONTROLLERS  // ROUTES                           //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

// ADD CONTROLLERS HERE:
const contactsController = require('./controllers/contacts_controller.js')
app.use('/contacts', contactsController)

const distrosController = require('./controllers/distros_controller.js')
app.use('/distros', distrosController)

// routes
app.get('/', (req, res) => {
  res.render('splash.ejs')
})

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                LISTENER                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

app.listen(PORT, () => {
  console.log('Listening on port:', PORT)
})
