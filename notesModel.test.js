const NotesModel = require('./notesModel');


describe('Notes model', () => {

  it('sut is an instance of NotesModel', () => {
    const notes = new NotesModel
    expect(notes).toBeInstanceOf(NotesModel);
  });

  it('has an empty array of notes when new instance made', () => {
    const notes = new NotesModel;
    expect(notes.notes).toEqual([]);
  });

  it('shows notes via a method', () => {
    const notes = new NotesModel;
    expect(notes.getNotes()).toEqual([]);
  });

  it('can add notes to the array and view them', () => {
    const notes = new NotesModel;
    notes.addNote("Hello");
    expect(notes.getNotes()).toEqual(["Hello"]);
  });

  it('can reset the notes', () => {
    const notes = new NotesModel;
    notes.addNote("Hello");
    expect(notes.getNotes()).toEqual(["Hello"]);
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  });

  it('should add all notes from the backend server', () => {
    const model = new NotesModel;
    const notesFromBackend = ["Get Milk"]
    model.setNotes(notesFromBackend);
    expect(model.getNotes()).toEqual(["Get Milk"])
  })

});