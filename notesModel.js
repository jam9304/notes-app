class NotesModel {
  constructor() {
    this.notes = [];
  };

  setNotes(notesFromBackend) {
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