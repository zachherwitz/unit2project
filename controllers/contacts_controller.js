//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                              DEPENDENCIES                                //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const express = require('express');
const contacts = express.Router();
const Contact = require('../models/contacts.js');

const setCheckboxes = (req) => {
  // DEPARTMENT HEAD //
  if(req.body.departmentHead === 'on') {
    req.body.departmentHead = true;
  } else {
    req.body.departmentHead = false;
  }
  // BTL //
  if(req.body.btl === 'on') {
    req.body.btl = true;
  } else {
    req.body.btl = false;
  }
  // CORE CREW //
  if(req.body.core === 'on') {
    req.body.core = true;
  } else {
    req.body.core = false;
  }
}

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  ROUTES                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

// NEW //
contacts.get('/new', (req, res) => {
  res.render(
    'new.ejs'
  )
})

// EDIT //
contacts.get('/:id/edit', (req, res) => {
  Contact.findById(req.params.id, (error, showContact) => {
    res.render(
      'edit.ejs',
      {
        contact: showContact
      }
    )
  })
})

// DESTROY //

// SHOW //
contacts.get('/:id', (req, res) => {
  Contact.findById(req.params.id, (error, showContact) => {
    res.render(
      'show.ejs',
      {
        contact: showContact
      }
    )
  })
})

// UPDATE //
contacts.put('/:id', (req, res) => {
  setCheckboxes(req)
  Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedContact) => {
    console.log(updatedContact)
    res.redirect('/contacts')
  })
})

// CREATE //
contacts.post('/', (req, res) => {
  setCheckboxes(req)
  Contact.create(req.body, (error, newContact) => {
    console.log(newContact)
    res.redirect('/contacts');
  })
})


// INDEX //
contacts.get('/', (req, res) => {
  Contact.find({}, (error, allContacts) => {
    res.render(
      'index.ejs',
      {
        contacts: allContacts
      }
    )
  })
})

//// MISC ROUTES ////
// Test Route //
// contacts.get('/', (req, res) => {
//   res.send('Testing, working now with seed route available!')
// })

// Seed Route //
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
