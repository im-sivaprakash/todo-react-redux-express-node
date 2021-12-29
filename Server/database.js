const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://siva22:sathya27@cluster0.nnnnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = client;

