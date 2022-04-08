/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const fs = require('fs');
const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();


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
    const api = new NotesApi();
    const view = new NotesView(model, api);
    
    const addButtonEl = document.querySelector('#submit');
    const inputEl = document.querySelector('#message-input');
    
    fetch.mockResponseOnce(async (request) => {
      
      console.log(`Hello this is a request`)
      console.log(request.method)

      try {
        expect(request.method).toBe('POST');
      } catch (error) {
        done(error);
      }

      return JSON.stringify({
        0: "Get Milk"
      });
      
    });

    inputEl.value = 'Hey';
    addButtonEl.click();
    // inputEl.value = 'Hello';
    // addButtonEl.click()

    expect(document.querySelector('.note')).not.toBeNull();
    expect(document.querySelectorAll('.note')[0].innerText).toBe('Hey');
    // expect(document.querySelectorAll('.note')[1].innerText).toBe('Hello');
  });

  it ('clears the text box after note has been added', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    const addButtonEl = document.querySelector('#submit');
    const inputEl = document.querySelector('#message-input');
    
    fetch.mockResponseOnce(async (request) => {

      console.log(`Hello this is a request`)
      console.log(request.method)

      try {
        expect(request.method).toBe('POST');
      } catch (error) {
        done(error);
      }

      return JSON.stringify({
        0: "Get Milk"
      });
      
    });

    inputEl.value = 'Hey';
    addButtonEl.click();

    expect(document.querySelector('#message-input').value).toEqual("");
  });

});