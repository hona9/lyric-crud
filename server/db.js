const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://username:password@cluster.mongodb.net/admin?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect((err) => {
      _db = client.db();
      return callback(err);
    });
  },
  getDb: function () {
    return _db;
  },
};
