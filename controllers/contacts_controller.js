//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                              DEPENDENCIES                                //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const express = require('express');
const contacts = express.Router();
const Contact = require('../models/contacts.js');


//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  ROUTES                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

// test route
contacts.get('/', (req, res) => {
  res.send('Testing, working now with seed route available!')
})

// testing seed route
contacts.get('/seed/confirm', (req, res) => {
  Contact.create(
    [
      {
        name: 'Zach H',
        department: 'Production',
        title: 'Production Secretary',
        departmentHead: false,
        phone: 'XXX-XXX-XXXX',
        email: 'XXXX@xxx.com',
        emergencyContactName: 'Olivia M',
        emergencyContactNumber: 'XXX-XXX-XXXX',
        emergencyContactRelationship: 'Partner',
        btl: true,
        core: true
      },
      {
        name: 'Max P',
        department: 'Production',
        title: 'Production Assistant',
        departmentHead: false,
        phone: 'XXX-XXX-XXXX',
        email: 'XXXX@xxx.com',
        btl: true,
        core: true
      }
    ],
    (error, data) => {
      res.redirect('/contacts')
    }
  )
})






module.exports = contacts;
