var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "R$tgers300my",
  database: "notetaker_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  testQuery();
});

function testQuery() {
  connection.query("SELECT * FROM notes", function(err, res) {
    if (err) throw err;
    console.log(res);
  });
}
