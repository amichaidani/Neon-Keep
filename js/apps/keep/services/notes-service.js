import utils from '../../../utils.js'

export default {
    gNotes,
    getNotes,
    noteCreate,
    noteDelete,
    noteDuplicate,
    noteUpdate,
    noteChangeColor,
    notePin
}

var gNotes = [];
const DEFAULT_COLOR = 'transparent';

function getNotes() {
    return Promise.resolve(gNotes)
}

function noteCreate(type, title, txt, url) {
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

function noteDelete(noteId) {
    let noteIdx = getNoteIdxById(noteId);
    gNotes.splice(noteIdx, 1);
    return Promise.resolve();
}

function noteDuplicate(noteId) {
    let note = getNoteById(noteId);
    noteCreate(note.type, note.data.title, note.data.txt);
    return Promise.resolve();
}

function noteUpdate(updatedNote) {
    let note = getNoteById(updatedNote.id)
    note.type = updatedNote.type;
    note.data.title = updatedNote.title;
    note.data.txt = updatedNote.txt;
    return Promise.resolve();
}

function noteChangeColor(noteId, newColor) {
    let note = getNoteById(noteId);
    note.color = newColor;
    return Promise.resolve();
}

function notePin(noteId) {
    let note = getNoteById(noteId);
    note.isPinned = !note.isPinned;
    return Promise.resolve();
}

function getNoteById(noteId) {
    let note = gNotes.find(note => note.id === noteId);
    return note;
}
function getNoteIdxById(noteId) {
    let note = gNotes.findIndex(note => note.id === noteId);
    return note;
}

// Create dummy data
noteCreate('img', '', 'https://s3.amazonaws.com/factmag-images/wp-content/uploads/2016/06/fractalfantasy2-6.24.2016.jpg')
noteCreate('txt', 'To Do:', 'Finish CRUD / LIST / Color picker')
noteCreate('vid', 'Wow :o', 'https://www.youtube.com/watch?v=a27te71Qh70')
noteCreate('img', '', 'https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png')