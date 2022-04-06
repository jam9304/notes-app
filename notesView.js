class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainer = document.querySelector('#main-container');
    this.addButtonEl = document.querySelector('#submit');
    this.inputEl = document.querySelector('#message-input');

    this.addButtonEl.addEventListener('click', () => {
      this.model.addNote(this.inputEl.value)
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