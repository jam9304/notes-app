const NotesModel = require('./notesModel');
const ViewModel = require('./notesView')

const notes = new NotesModel;
const view = new ViewModel(notes);

notes.addNote("Hello")
notes.addNote("GoodBye")
view.displayNotes()


// console.log('The notes app is running')
// console.log(notes.getNotes());
// console.log(notes.addNote("First Note"));
// console.log(notes.getNotes());
// console.log(notes.reset());
// console.log(notes.getNotes());