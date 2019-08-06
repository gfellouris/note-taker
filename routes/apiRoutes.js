// connect to the mysql server and sql database
var connection = require("../db/connection");
// create express server instance
var app = require("../server");
var path = require("path");

// ============ Database TEST ============
// testQuery();
// function testQuery() {
//   connection.query("SELECT * FROM notes", function(err, resSQL) {
//     if (err) throw err;
//     console.log(resSQL);
//     console.log("mySQL DB working! TEST PASSED");
//   });
// }

// ============ Express App TEST ============
// app.get("/", function(req, resExpress) {
//     resExpress.send("Express server is working - TEST PASSED!");
// });

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// ============ Return all notes  ============
app.get("/api/allnotes", function(req, resExpress) {
  connection.query("SELECT * FROM notes", function(err, resSQL) {
    if (err) throw err;
    resExpress.json(resSQL);
  });
});
// ============ Return all notes  ============
app.get("/api/countnotes", function(req, resExpress) {
  connection.query("SELECT count(*) as numnotes FROM notes", function(err, resSQL) {
    if (err) throw err;
    resExpress.json(resSQL);
  });
});
// ============ Add a new note ============
app.post("/api/add", function(req, resExpress) {
  var newNote = req.body;
  var noteTitle = newNote.title;
  var noteText = newNote.boby;

  console.log(`Title: ${newNote.title} Text: ${newNote.body}`);
  sqlInsert = `INSERT INTO notes (title, body) VALUE ("${newNote.title}", "${
    newNote.body
  }")`;
  console.log(sqlInsert);
  connection.query(sqlInsert, function(err, resSQL) {
    if (err) throw err;
    console.log(resSQL);
    resExpress.json(newNote);
  });
});

// ============ Add a new note ============
app.get("/api/delete/:id", function(req, resExpress) {
  var delNoteId = parseInt(req.params.id);
  console.log(`delete note with item ID: ${delNoteId}`);

  sqlDelete = `DELETE FROM notes WHERE id=${delNoteId}`;
  console.log(sqlDelete);
  connection.query(sqlDelete, function(err, resSQL) {
    if (err) throw err;
    console.log("changed rows=" + resSQL.affectedRows);
    // console.log(resSQL);
    if (resSQL.affectedRows === 0) {
      return resExpress.json([
        {
          msg: `Note ID ${delNoteId} not found. Nothing to delete.`
        }
      ]);
    } else {
      return resExpress.json(true); //Nothing to return
    }
  });
});
