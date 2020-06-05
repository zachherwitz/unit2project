//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                              DEPENDENCIES                                //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const express = require('express');
const contacts = express.Router();
const Contact = require('../models/contacts.js');
const Distro = require('../models/distro.js')

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
  Distro.find({}, (error, allDistros) => {
    res.render(
      'contacts/contacts-new.ejs',
      {
        distros: allDistros
      }
    )
  })
})

// EDIT //
contacts.get('/:id/edit', (req, res) => {
  Contact.findById(req.params.id, (error, showContact) => {
    res.render(
      'contacts/contacts-edit.ejs',
      {
        contact: showContact
      }
    )
  })
})

// DESTROY //
contacts.delete('/:id', (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (error, deletedContact) => {
    res.redirect('/contacts/')
  })
})

// SHOW //
contacts.get('/:id', (req, res) => {
  Contact.findById(req.params.id, (error, showContact) => {
    res.render(
      'contacts/contacts-show.ejs',
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
      'contacts/contacts-index.ejs',
      {
        contacts: allContacts
      }
    )
  })
})

//R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P
//                                                                           //
//                                GRAVEYARD                                  //
//                                                                           //
//R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P
//// MISC ROUTES ////
// Test Route //
// contacts.get('/', (req, res) => {
//   res.send('Testing, working now with seed route available!')
// })

// // Seed Route //
// contacts.get('/seed/confirm', (req, res) => {
//   Contact.create(
//     [
//       {
//         name: 'Zach H',
//         department: 'Production',
//         title: 'Production Secretary',
//         departmentHead: false,
//         phone: 'XXX-XXX-XXXX',
//         email: 'XXXX@xxx.com',
//         emergencyContactName: 'Olivia M',
//         emergencyContactNumber: 'XXX-XXX-XXXX',
//         emergencyContactRelationship: 'Partner',
//         btl: true,
//         core: true
//       },
//       {
//         name: 'Max P',
//         department: 'Production',
//         title: 'Production Assistant',
//         departmentHead: false,
//         phone: 'XXX-XXX-XXXX',
//         email: 'XXXX@xxx.com',
//         btl: true,
//         core: true
//       }
//     ],
//     (error, data) => {
//       res.redirect('/contacts')
//     }
//   )
// })


//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  EXPORT                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

module.exports = contacts;
