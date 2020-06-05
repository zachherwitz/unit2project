const mongoose = require('mongoose');
const contacts = require('./contacts')

const distroSchema = new mongoose.Schema(
  {
    name: String,
    members: String,
    confidential: Boolean
  }
)


const Distro = mongoose.model('Distro', distroSchema);

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  EXPORT                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

module.exports = Distro;
