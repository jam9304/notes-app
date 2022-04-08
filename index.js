const NotesModel = require('./notesModel');
const ViewModel = require('./notesView')
const NotesApi = require('./notesApi')

const model = new NotesModel;
const api = new NotesApi();
const view = new ViewModel(model, api);

// api.loadNotes()
// // model.setNotes(api.loadNotes())
// // view.displayNotes()
api.loadNotes((notes) => {
  // This method is new — you'll need to add it to the model class
  model.setNotes(notes);
  view.displayNotes();
})
