const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    department: String,
    phone: String,
    email: String,
    emergencyContactName: String,
    emergencyContactNumber: String,
    emergencyContactRelationship: String,
    distros: [String]
  }
)

const Contact = mongoose.model('Contact', contactSchema);

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  EXPORT                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

module.exports = Contact;
