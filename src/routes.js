import contactController from './controller/contactController';
const router = require("express").Router();

// Home page route
router.get("/", (req, res) =>
  res.send("Contact Message Handler - Server Side")
);

// Contact routes
router.route('/contacts')
    .get(contactController.findAll)
    .post(contactController.saveContact);

export default router;
