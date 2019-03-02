import utils from '../../../utils.js'

export default {
    gNotes,
    getNotes,
    createNote,
    deleteNote,
    duplicateNote,
    changeNoteColor,
    pinNote
}

var gNotes = [];
const DEFAULT_COLOR = 'transparent';

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

function changeNoteColor(noteId, newColor) {
    let note = gNotes.find(note => note.id === noteId);
    note.color = newColor;
    return Promise.resolve();
}

function pinNote(noteId) {
    let note = gNotes.find(note => note.id === noteId);
    note.isPinned = !note.isPinned;
    return Promise.resolve();
}

// Create dummy data
createNote('img', '', 'https://s3.amazonaws.com/factmag-images/wp-content/uploads/2016/06/fractalfantasy2-6.24.2016.jpg')
createNote('txt', 'To Do:', 'Finish CRUD / Pin / Color picker')
createNote('vid', 'Wow :o', 'https://www.youtube.com/watch?v=a27te71Qh70')
createNote('img', '', 'https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png')