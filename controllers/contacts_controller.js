//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                              DEPENDENCIES                                //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const express = require('express');
const contacts = express.Router();
const Contact = require('../models/contacts.js');

// const setCheckboxes = (req) => {
//   // DEPARTMENT HEAD //
//   if(req.body.departmentHead === 'on') {
//     req.body.departmentHead = true;
//   } else {
//     req.body.departmentHead = false;
//   }
// }

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  ROUTES                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

// NEW //
contacts.get('/new', (req, res) => {
  res.render(
    'contacts/contacts-new.ejs'
  )
})

// EDIT //
contacts.get('/:id/edit', (req, res) => {
  Contact.findById(req.params.id, (error, showContact) => {
    let contactDistros = showContact.distros.join()
    res.render(
      'contacts/contacts-edit.ejs',
      {
        contact: showContact,
        distros: contactDistros
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
  // setCheckboxes(req)
  Contact.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedContact) => {
    console.log(updatedContact)
    res.redirect('/contacts/' + req.params.id)
  })
})

// CREATE //
contacts.post('/', (req, res) => {
  // setCheckboxes(req)
  // res.send(req.body)
  Contact.create(req.body, (error, newContact) => {
    console.log(newContact)
    res.redirect('/contacts');
  })
})


// INDEX //
contacts.get('/', (req, res) => {
  Contact.find({}, {'name': 1, 'id': 1, 'distros': 1}, (error, allContacts) => {
    console.log(allContacts[0]);
    let distroList = [];
    for (let i = 0; i < allContacts.length; i++) {
      // console.log(allContacts[i].distros);
      for (let j = 0; j < allContacts[i].distros.length; j++) {
        if (allContacts[i].distros[j]) {
          distroList.push(allContacts[i].distros[j])
        }
      }
    }
    allContacts.sort((first, second) => {
      let firstName = first.name.toLowerCase()
      let secondName = second.name.toLowerCase()
      if (firstName < secondName) {
        return -1
      } else {
        return 1
      }
    })
    const filteredList = distroList.filter((v, i, a) => a.indexOf(v) === i);
    res.render(
      'contacts/contacts-index.ejs',
      {
        contacts: allContacts,
        distros: filteredList
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

// Seed Route //
// contacts.get('/seed/confirm', (req, res) => {
//   Contact.create(
//     [
//       // {
//       //   name: 'Zach Herwitz',
//       //   title: 'Project Manager',
//       //   department: 'Production',
//       //   phone: '301-367-9821',
//       //   email: 'zach.herwitz@gmail.com',
//       //   emergencyContactName: 'Olivia',
//       //   emergencyContactNumber: '302-867-5309',
//       //   emergencyContactRelationship: 'Partner',
//       //   distros: ['callsheet', 'production', 'prep schedule', 'pizza party']
//       // },
//       {
//         name: 'Sama Slater',
//         title: 'Lead Designer',
//         department: 'Art',
//         phone: '444-367-9821',
//         email: 'sama.slater@gmail.com',
//         emergencyContactName: 'Billy',
//         emergencyContactNumber: '342-867-5309',
//         emergencyContactRelationship: 'Partner',
//         distros: ['art', 'prep schedule', 'tech scout']
//       },
//       {
//         name: 'Danyaal Sutherland',
//         title: 'Designer',
//         department: 'Art',
//         phone: '432-367-9821',
//         email: 'danyaal.sutherland@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['art', 'prep schedule', 'pizza party']
//       },
//       {
//         name: 'Brian Power',
//         title: 'Production Coordinator',
//         department: 'Production',
//         phone: '301-367-9821',
//         email: 'brian-power@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['production', 'prep schedule', 'internship']
//       },
//       {
//         name: 'Viola Wallis',
//         title: 'Production Assistant',
//         department: 'Production',
//         phone: '444-367-9821',
//         email: 'viola-wallis@gmail.com',
//         emergencyContactName: 'Benji',
//         emergencyContactNumber: '342-867-5309',
//         emergencyContactRelationship: 'Father',
//         distros: ['production', 'prep schedule', 'tech scout']
//       },
//       {
//         name: 'Ava-Mae Pike',
//         title: 'Designer',
//         department: 'Art',
//         phone: '432-367-9821',
//         email: 'ava-mae@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['art', 'pizza party']
//       },
//       {
//         name: 'Marguerite Brett',
//         title: 'Design Intern',
//         department: 'Art',
//         phone: '432-367-9821',
//         email: 'marguerite@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['art', 'internship']
//       },
//       {
//         name: 'Sarah Purchase',
//         title: 'Communications Intern',
//         department: 'Communications',
//         phone: '432-367-9821',
//         email: 'sarahpurchase@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['comms', 'internship']
//       },{
//         name: 'Rita Hayworth',
//         title: 'Communications Intern',
//         department: 'Communications',
//         phone: '432-367-9821',
//         email: 'ritahayworth@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['comms', 'internship']
//       },{
//         name: 'Paul Belt',
//         title: 'Design Intern',
//         department: 'Art',
//         phone: '432-367-9821',
//         email: 'paulbelt@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['art', 'internship']
//       },{
//         name: 'Sandy Myers',
//         title: 'Production Intern',
//         department: 'Production',
//         phone: '432-367-9821',
//         email: 'marguerite@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['art', 'internship', 'pizza party']
//       },
//       {
//         name: 'Aurora Smithson',
//         title: 'VP of HR',
//         department: 'Human Resources',
//         phone: '432-367-9821',
//         email: 'aurorasmithson@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['hr', 'callsheet']
//       },
//       // {
//       //   name: 'Biggie Smalls',
//       //   title: 'Legend',
//       //   department: 'Music',
//       //   phone: '432-367-9821',
//       //   email: 'biggie@gmail.com',
//       //   emergencyContactName: '',
//       //   emergencyContactNumber: '',
//       //   emergencyContactRelationship: '',
//       //   distros: ['music', 'pizza party']
//       // },
//       // {
//       //   name: 'Tupac Shakur',
//       //   title: 'Legend',
//       //   department: 'Music',
//       //   phone: '432-367-9821',
//       //   email: 'tupac@gmail.com',
//       //   emergencyContactName: '',
//       //   emergencyContactNumber: '',
//       //   emergencyContactRelationship: '',
//       //   distros: ['music', 'callsheet']
//       // },
//       {
//         name: 'Kentucky Poole',
//         title: 'Mascot',
//         department: 'Morale',
//         phone: '432-367-9821',
//         email: 'marguerite@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['morale boost', 'selfcare']
//       },
//       {
//         name: 'Jessica Rabrit',
//         title: 'Mascot',
//         department: 'Morale',
//         phone: '432-367-9821',
//         email: 'marguerite@gmail.com',
//         emergencyContactName: '',
//         emergencyContactNumber: '',
//         emergencyContactRelationship: '',
//         distros: ['morale boost', 'selfcare']
//       },
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
