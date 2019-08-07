
## Note Taker Application - The **What**
- [GitHub repo](https://github.com/gfellouris/note-taker.git)

The user can save, view, or delete notes, page will automatically refresh to see the changes. Every note is always visible.

## Motivation - The **Why**
Node, Express, and MySQL powered note-taking application. The user will have the ability to create, read, and delete notes from a MySQL database.


## Technologies used and why
<b>Built with</b>
- mySQL - used in order to create and delete notes that would be dynamic and maintained even when the app is not running.
- Node.js - used to create api routes
- Express.js - web instance
- Bootstrap - responsive design
- jQuery - dynamic content for adding and deleting notes

## Features
Immediate inventory updates and blazing fast database updates.

### Heroku URL
- [Heroku hosted site](https://afternoon-lake-57981.herokuapp.com/)

### Routes (routes/apiRoutes.js):
* / - index.html
* /notes - notes.html
* /api/allnotes - queries db for all notes
* /api/countnotes - give the total count of all notes
* /api/add - adds a new note to the database
* /api/delete/:id - deletes a note based on the notes ID#


## How to use?
* node routes/apiRoutes.js - controller
* node ./server.js - express server (called from apiRoutes.js)
* node db/connection.js - mysql server (called from apiRoutes.js)

### install npm packages:
* npm i mysql
* npm i express
* npm i path

### Run the program by type:
* node routes/apiRoutes.js

## Credits
- Shout-out to Dealan and Vanessa for raising the bar to enhance my UI.

MIT © [George Fellouris]()
