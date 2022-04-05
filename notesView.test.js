/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const fs = require('fs');

describe('Page view', () => {
  it('displays 2 divs, 1 div for each note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("Hello");
    model.addNote("Goodbye");
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});