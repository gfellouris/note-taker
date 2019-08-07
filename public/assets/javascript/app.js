var faTrash = '<i class="fas fa-trash-alt float-right text-danger">';
var faNotes = '<i class="fas fa-sticky-note text-info"></i>';

var liStartNoteTitle = '<li class="list-group-item"> ';
liStartNoteTitle += '<span class="font-weight-bold">';
liStartNoteTitle += '<i class="far fa-sticky-note text-success"></i>';
var liEndNoteTitle = "</span>";
var liStartNoteBody = "<p>";
var liEndNoteBody = "</p></li>";

// This will run when the page is loaded and display all notes
$.get("/api/allnotes", function(data) {
  console.log(data);
  if (data) {
    $("#noteInfo").show();
    for (var i = 0; i < data.length; i++) {
      var delItem =
        "<i id=" +
        data[i].id +
        ' class="fas fa-trash-alt float-right text-danger"></i>';
      var noteTitle =
        liStartNoteTitle + " " + data[i].title + liEndNoteTitle + delItem;
      noteTitle += liStartNoteBody + data[i].body + liEndNoteBody;
      $("#notesInfo").append(noteTitle);
    }
  } else {
    $("#noteInfo").text("No notes found");
    $("#notesInfo").hide();
  }
});

$.get("/api/countnotes", function(data) {
  console.log(data);
  if (data) {
    var countNotes = data[0].numnotes;
    $("#countnotes").text(countNotes);
  } else {
    $("#noteInfo").text(
      "The force is not strong with this one. Your character was not found."
    );
    $("#notesInfo").hide();
  }
});

$(document).on("click", ".fa-trash-alt", function() {
  //   var topicSelected = $(this).attr("data-name");
  // alert($(this).attr("data-name"));
  var delNoteId = $(this).attr("id");

  $.get("/api/delete/" + delNoteId, function(data) {
    console.log(data);
    if (data) {
      alert("Note " + delNoteId + " deleted.");
    } else {
      alert("Note " + delNoteId + " not found.");
    }
    location.reload();
  });
});

$("#save-btn").on("click", function(event) {
  event.preventDefault();
  var newNote = {
    title: $("#noteTitle")
      .val()
      .trim(),
    body: $("#noteBody")
      .val()
      .trim()
  };

  $.post("/api/add", newNote).then(function(data) {
    console.log("add.html", data);
    // alert("Adding note...");
    location.reload();
  });
});
