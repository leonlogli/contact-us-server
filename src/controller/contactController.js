import Contact from "../model/Contact";

const getContacts = (req, res) => {
  Contact.find((err, contacts) => {
    if (err) {
      res.status(500).json(err);
    }
    res.send(contacts);
  });
};

const saveContact = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Contact content can not be empty"
    });
  }

  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    office: req.body.office,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  });

  contact
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

export default { findAll: getContacts, saveContact };
