const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe('NotesApi class', () => {
  it('should call fetch and loads previous notes', async () => {
    const api = new NotesApi();

    fetch.mockResponseOnce(JSON.stringify({
      content: "Get Milk"
    }));

    api.loadNotes((listOfNotes) => {
      expect(listOfNotes.content).toBe("Get Milk");
    });
  });
});