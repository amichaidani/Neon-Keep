import utils from '../../../utils.js'

export default {
    gNotes,
    getNotes,
    createNote,
    deleteNote,
}

var gNotes = [];
const DEFAULT_COLOR = '#666';

function getNotes() {
    return Promise.resolve(gNotes)
}

function createNote(type, title, txt, url) {
    let newNote = {
        id: utils.makeid(),
        type,
        color: DEFAULT_COLOR,
        data: {
            title: (title) ? title : null,
            txt: txt,
            url: (url) ? url : null
        }
    }

    gNotes.push(newNote);
    return Promise.resolve(newNote);
}

function deleteNote(noteId) {
    let noteIdx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(noteIdx, 1);

    return Promise.resolve();
}

// Create dummy data
createNote('txt', 'Hello!', 'lala');
createNote('video', 'Yo', 'lala');
