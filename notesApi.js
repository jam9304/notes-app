class NotesApi {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then(response =>{ return response.json()})
      .then(data => {
        callback(data)
      });
  };
};
module.exports = NotesApi;