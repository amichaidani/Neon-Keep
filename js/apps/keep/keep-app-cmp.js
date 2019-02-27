import notesService from './services/notes-service.js'
import notesList from './cmps/notes-list-cmp.js';
import notesAdd from './cmps/notes-add-cmp.js';

import { eventBus, EVENT_NOTE_DELETE } from '../../event-bus.js';


export default {
    template: `
                <section class="keep-app">
                    <notes-add @newNoteAdded="addNewNote"></notes-add>
                    <notes-list :notes="notes"></notes-list>
                </section>`,
    components: { notesList, notesAdd },
    data() {
        return {
            notes: []
        }
    },
    methods: {
        addNewNote(ev) {
            notesService.createNote(ev.type, ev.title, ev.txt);
        },
        deleteNote(noteId) {
            notesService.deleteNote(noteId);
        }
    },
    created() {
        eventBus.$on(EVENT_NOTE_DELETE, noteId => {
            this.deleteNote(noteId)
        });
        notesService.getNotes().then(res => this.notes = res);
    }
}