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

  it('createNote is able POST on the backend server',(done) => {
    const api = new NotesApi();

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

    api.createNote("Get Milk", (response) => {
      expect(response[0]).toBe("Get Milk");
      done();
    });
  });
});

