import utils from '../../../utils.js'

export default {
    gNotes,
    getNotes,
    createNote,
    deleteNote,
    duplicateNote
}

var gNotes = [];
const DEFAULT_COLOR = '#666';

function getNotes() {
    return Promise.resolve(gNotes)
}

function createNote(type, title, txt, url) {
    let newNote = {
        id: utils.makeid(),
        timestamp: Date.now(),
        type,
        isPinned: false,
        color: DEFAULT_COLOR,
        data: {
            title: (title) ? title : '',
            txt: txt,
            url: (url) ? url : ''
        }
    }

    gNotes.unshift(newNote);
    return Promise.resolve(newNote);
}

function deleteNote(noteId) {
    let noteIdx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(noteIdx, 1);

    return Promise.resolve();
}

function duplicateNote(noteId) {
    let note = gNotes.find(note => note.id === noteId);
    createNote(note.type, note.data.title, note.data.txt);
    return Promise.resolve();
}

// Create dummy data
createNote('txt', 'To Do:', 'Finish CRUD / fix youtube preview / Pin / Color picker')
createNote('txt', 'Hello!', 'lala');
createNote('txt', 'Yo', 'lala');
createNote('txt', 'Whats up?', 'This is a short text note');
createNote('vid', 'Coming soon', 'This is a short text note');
createNote('img', '', 'https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png')