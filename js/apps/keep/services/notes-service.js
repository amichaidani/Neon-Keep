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

function createNote(type, title, content, url) {
    let newNote = {
        id: utils.makeid(),
        type,
        color: DEFAULT_COLOR,
        data: {
            title: (title) ? title : null,
            content,
            url: (url) ? url : null
        }
    }

    gNotes.push(newNote);
}



// Create dummy data
createNote('txt', 'Hello!', 'lala');
createNote('video', 'Yo', 'lala');
