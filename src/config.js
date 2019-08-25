export default {
  dbUrl: process.env.MONGODB_URI || "mongodb://localhost/contactsDB",
  serverPort: process.env.PORT || 8080
};
