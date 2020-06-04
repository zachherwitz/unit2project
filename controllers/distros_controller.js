//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                              DEPENDENCIES                                //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const express = require('express');
const distros = express.Router();
const Distro = require('../models/distro.js')

const checkConfidential = (req) => {
  // Confidential //
  if(req.body.confidential === 'on') {
    req.body.confidential = true;
  } else {
    req.body.confidential = false;
  }
}

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  ROUTES                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

// NEW //
distros.get('/new', (req, res) => {
  res.render(
    'distros/distro-new.ejs'
  )
})

// EDIT //
distros.get('/:id/edit', (req, res) => {
  Distro.findById(req.params.id, (error, showDistro) => {
    res.render(
      'distros/distro-edit.ejs',
      {
        distro: showDistro
      }
    )
  })
})

// DESTROY //
distros.delete('/:id', (req, res) => {
  Distro.findByIdAndRemove(req.params.id, (error, deletedDistro) => {
    res.redirect('/distros/')
  })
})

// SHOW //
distros.get('/:id', (req, res) => {
  Distro.findById(req.params.id, (error, showDistro) => {
    res.render(
      'distros/distro-show.ejs',
      {
        distro: showDistro
      }
    )
  })
})

// UPDATE //
distros.put('/:id', (req, res) => {
  checkConfidential(req)
  Distro.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedDistro) => {
    console.log(updatedDistro);
    res.redirect('/distros')
  })
})

// CREATE //
distros.post('/', (req, res) => {
  checkConfidential(req)
  Distro.create(req.body, (error, newDistro) => {
    console.log(newDistro);
    res.redirect('/distros')
  })
})

// INDEX //
distros.get('/', (req, res) => {
  Distro.find({}, (error, allDistros) => {
    res.render(
      'distros/distro-index.ejs',
      {
        distros: allDistros
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
