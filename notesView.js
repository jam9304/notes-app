class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainer = document.querySelector('#main-container');
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

};

module.exports = NotesView;