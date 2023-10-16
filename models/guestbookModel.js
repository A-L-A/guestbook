const nedb = require("gray-nedb");

class GuestBook {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.db = new nedb({ filename: dbFilePath, autoload: true });
      console.log("DB connected to " + dbFilePath);
    } else {
      this.db = new nedb();
    }
  }

  init() {
    this.db.insert({
      subject: "I liked the exhibition",
      contents: "nice",
      published: "2020-02-16",
      author: "Peter",
    });

    //for later debugging
    console.log("db entry Peter inserted");
    this.db.insert({
      subject: "Didn't like it",
      contents: "A really terrible style!",
      published: "2020-02-18",
      author: "Ann",
    });

    //for later debugging
    console.log("db entry Ann inserted");
  }

  //a function to return all entries from the database
  getAllEntries() {
    //return a Promise object, which can be resolved or rejected
    return new Promise((resolve, reject) => {
      //use the find() function of the database to get the data,
      //error first callback function, err for error, entries for data
      this.db.find({}, function (err, entries) {
        //if error occurs reject Promise
        if (err) {
          reject(err);
          //if no error resolve the promise & return the data
        } else {
          resolve(entries);
          //to see what the returned data looks like
          console.log("function all() returns: ", entries);
        }
      });
    });
  }

  getPetersEntries() {
    //return a Promise object, which can be resolved or rejected
    return new Promise((resolve, reject) => {
      //find(author:'Peter) retrieves the data,
      //with error first callback function, err=error, entries=data
      this.db.find({ author: "Peter" }, function (err, entries) {
        //if error occurs reject Promise
        if (err) {
          reject(err);
          //if no error resolve the promise and return the data
        } else {
          resolve(entries);
          //to see what the returned data looks like
          console.log("getPetersEntries() returns: ", entries);
        }
      });
    });
  }
  
}

module.exports = GuestBook;
