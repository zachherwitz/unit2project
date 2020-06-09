//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                              DEPENDENCIES                                //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const express = require('express');
const distros = express.Router();
const Contact = require('../models/contacts.js');
// const Distro = require('../models/distro.js')

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  ROUTES                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

// SHOW //
distros.get('/:id', (req, res) => {
  Contact.find({'distros': {'$regex': req.params.id}}, (error, showDistro) => {
    // console.log(showDistro);
    res.render(
      'distros/distro-show.ejs',
      {
        distro: showDistro,
        distroName: req.params.id
      }
    )
  })
})

//R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P
//                                                                           //
//                                GRAVEYARD                                  //
//                                                                           //
//R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P~//~R.I.P

// // Seed Route //
// distros.get('/seed/confirm', (req, res) => {
//   Distro.create(
//     [
//       {
//         name: 'Call Sheet',
//         members: 'All Crew',
//         confidential: false,
//       },
//       {
//         name: 'Cast List',
//         members: 'Production, Studio, Casting',
//         confidential: true,
//       }
//     ],
//     (error, data) => {
//       res.redirect('/distros')
//     }
//   )
// })

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  EXPORT                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

module.exports = distros;
