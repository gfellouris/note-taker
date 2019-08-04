// connect to the mysql server and sql database
var connection = require("./db/connection");
// create express server instance
var app = require("./server");

// ============ Database TEST ============ 
testQuery();
function testQuery() {
  connection.query("SELECT * FROM notes", function(err, res) {
    if (err) throw err;
    console.log(res);
    console.log("mySQL DB working! TEST PASSED");
  });
}

// ============ Express App TEST ============ 
app.get("/", function(req, res) {
  res.send("Express server is working - TEST PASSED!");
});
