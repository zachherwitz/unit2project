const mongoose = require('mongoose');
const Contact = require('./contacts')

const distroSchema = new mongoose.Schema(
  {
    name: String,
    // members: [Contact.schema],
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
