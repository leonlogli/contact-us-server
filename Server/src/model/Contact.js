import mongoose from "mongoose";
mongoose.set('useCreateIndex', true);

const contactSchema = mongoose.Schema({
  office: String,
  firstName: String,
  lastName: String,
  email: {
    type: String,
    trim: true,
    unique: "The specified email already exists",
    required: "Email address is required",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  phone: String,
  message: {
    type: String,
    required: "Message is mandatory"
  }
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
