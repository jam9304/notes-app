/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const fs = require('fs');
const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();

jest.mock('./notesApi');


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

  it('Shows notes after we click button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const mockApi = new NotesApi();
    const view = new NotesView(model, mockApi);
    
    const addButtonEl = document.querySelector('#submit');
    const inputEl = document.querySelector('#message-input');

    mockApi.createNote.mockImplementation(() => {})

    inputEl.value = 'Hey';
    addButtonEl.click();
    inputEl.value = 'Hello';
    addButtonEl.click()

    expect(document.querySelector('.note')).not.toBeNull();
    expect(document.querySelectorAll('.note')[0].innerText).toBe('Hey');
    expect(document.querySelectorAll('.note')[1].innerText).toBe('Hello');
  });

  it ('clears the text box after note has been added', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const mockApi = new NotesApi();
    const view = new NotesView(model, mockApi);

    const addButtonEl = document.querySelector('#submit');
    const inputEl = document.querySelector('#message-input');
    
    mockApi.createNote.mockImplementation(() => {})

    inputEl.value = 'Hey';
    addButtonEl.click();

    expect(document.querySelector('#message-input').value).toEqual("");
  });

});