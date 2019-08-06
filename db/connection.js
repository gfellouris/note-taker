var mysql = require("mysql");

var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: "iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "eig4rkog5an6ii6v",
    password: "j8sdna2r5pu59mwi",
    database: "x1810yebuflxwg2d"
  });
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "R$tgers300my",
    database: "notetaker_db"
  });
}

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

module.exports = connection;
