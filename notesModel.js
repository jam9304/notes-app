class NotesModel {
  constructor() {
    this.notes = [];
  };

  setNotes(notesFromBackend) {
    console.log('Im here')
    this.notes = notesFromBackend
  };

  getNotes() {
    return this.notes;
  };

  addNote(note) {
    this.notes.push(note);
  };

  reset() {
    this.notes = [];
  };

};

module.exports = NotesModel;