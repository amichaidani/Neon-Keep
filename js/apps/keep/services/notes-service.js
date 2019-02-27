import utils from '../../../utils.js'

export default {
    gNotes,
    getNotes,
    createNote,
}

var gNotes = [];
const DEFAULT_COLOR = 'transparent';

function getNotes() {
    return gNotes
}

function createNote(type, content) {
    let newNote = {
        id: utils.makeid(),
        type,
        content,
        color: DEFAULT_COLOR
    }
    gNotes.push(newNote);
}



// Create dummy data
createNote('txt', 'lala');
createNote('video', 'lala');
