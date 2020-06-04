const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: String,
    department: String,
    title: String,
    departmentHead: Boolean,
    phone: String,
    email: String,
    emergencyContactName: String,
    emergencyContactNumber: String,
    emergencyContactRelationship: String,
    btl: Boolean,
    core: Boolean
  }
)

const Contact = mongoose.model('Contact', contactSchema);

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                                                          //
//                                  EXPORT                                  //
//                                                                          //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

module.exports = Contact;
