class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api
    this.mainContainer = document.querySelector('#main-container');
    this.addButtonEl = document.querySelector('#submit');
    this.inputEl = document.querySelector('#message-input');

    this.addButtonEl.addEventListener('click', () => {
      this.model.addNote(this.inputEl.value)
      this.api.createNote(this.inputEl.value, (response) => {
        //to fulfill the promise
      });
      console.log('DO YOU SEE THAT I MADE IT BOYZ???');
      this.clearMessageInput();
      this.removeAllNotes();
      this.displayNotes();
    });
  };

  displayNotes() {
    const theNotes = this.model.getNotes();

    theNotes.forEach(note => {
      const div = document.createElement('div');
      div.innerText = note;
      div.className = 'note';
      this.mainContainer.append(div);
    });
  };

  removeAllNotes() {
    const currentNotes = document.querySelectorAll('.note');
    currentNotes.forEach(noteEl => {
      noteEl.remove();
    });
  };

  clearMessageInput() {
    this.inputEl.value = null;
  };

};

module.exports = NotesView;