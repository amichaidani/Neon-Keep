import utils from '../../../utils.js'

export default {
    gNotes,
    getNotes,
    createNote,
    deleteNote,
}

var gNotes = [];
const DEFAULT_COLOR = 'transparent';

function getNotes() {
    return gNotes
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
}

function deleteNote(noteId) {
    let noteIdx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(noteIdx, 1);
}

// Create dummy data
createNote('txt', 'Hello!', 'lala');
createNote('video', 'Yo', 'lala');
