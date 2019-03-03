import notesService from './services/notes-service.js'
import notesListGroup from './cmps/notes-list-group-cmp.js';
import notesAdd from './cmps/notes-add-cmp.js';

import {
    eventBus,
    EVENT_SEARCH_INPUT,
    EVENT_NOTE_DELETE,
    EVENT_NOTE_DUPLICATE,
    EVENT_NOTE_UPDATE,
    EVENT_NOTE_COLOR,
    EVENT_NOTE_PIN
} from '../../event-bus.js';


export default {
    template: `
                <section class="keep-app">
                    <notes-list-group :notes="notesToShow"></notes-list-group>
                    <notes-add @newNoteAdded="addNewNote" @noteUpdated="onNoteUpdated"></notes-add>
                </section>`,
    components: { notesListGroup, notesAdd },
    data() {
        return {
            notes: [],
            filterTxt: '',
        }
    },
    methods: {
        addNewNote(ev) {
            notesService.noteCreate(ev.type, ev.title, ev.txt);
        },
        onNoteDelete(noteId) {
            notesService.noteDelete(noteId);
        },
        onNoteDuplicate(noteId) {
            notesService.noteDuplicate(noteId);
        },
        onNoteUpdated(ev) {
            notesService.noteUpdate(ev);
        },
        onNoteChangeColor(noteId, newColor) {
            notesService.noteChangeColor(noteId, newColor);
        },
        onNotePin(noteId) {
            notesService.notePin(noteId);
        }
    },
    computed: {
        notesToShow() {
            let filteredNotes = this.notes.filter(note => {
                return (note.data.txt.toLowerCase().includes(this.filterTxt) || note.data.title.toLowerCase().includes(this.filterTxt));
            })
            return filteredNotes;
        }
    },
    created() {
        notesService.getNotes().then(res => this.notes = res);

        eventBus.$on(EVENT_SEARCH_INPUT, search => {
            this.filterTxt = search;
        });

        eventBus.$on(EVENT_NOTE_DELETE, noteId => {
            this.onNoteDelete(noteId);
        });

        eventBus.$on(EVENT_NOTE_DUPLICATE, noteId => {
            this.onNoteDuplicate(noteId);
        });

        eventBus.$on(EVENT_NOTE_COLOR, ev => {
            this.onNoteChangeColor(ev.id, ev.color);
        });

        eventBus.$on(EVENT_NOTE_PIN, noteId => {
            this.onNotePin(noteId);
        });

    },
    destroyed() {
        eventBus.$off(EVENT_NOTE_DELETE);
        eventBus.$off(EVENT_NOTE_DUPLICATE);
        eventBus.$off(EVENT_NOTE_UPDATE);
        eventBus.$off(EVENT_NOTE_COLOR);
        eventBus.$off(EVENT_SEARCH_INPUT);
    },
}