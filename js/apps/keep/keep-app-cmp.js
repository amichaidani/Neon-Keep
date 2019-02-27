import notesService from './services/notes-service.js'
import notesList from './cmps/notes-list-cmp.js';
import notesAdd from './cmps/notes-add-cmp.js';

import { eventBus, EVENT_NOTE_DELETE } from '../../event-bus.js';


export default {
    template: `
                <section class="keep-app">
                    <notes-list :notes="notes"></notes-list>
                    <notes-add @newNoteAdded="addNewNote"></notes-add>
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
        notesService.getNotes().then(res => this.notes = res);

        eventBus.$on(EVENT_NOTE_DELETE, noteId => {
            this.deleteNote(noteId)
            console.log('deleting ', noteId)
        });
    },
    destroyed() {
        eventBus.$off(EVENT_NOTE_DELETE)
    },
}