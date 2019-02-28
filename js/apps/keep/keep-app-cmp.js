import notesService from './services/notes-service.js'
import notesList from './cmps/notes-list-cmp.js';
import notesAdd from './cmps/notes-add-cmp.js';

import { eventBus, EVENT_NOTE_DELETE, EVENT_SEARCH_INPUT } from '../../event-bus.js';


export default {
    template: `
                <section class="keep-app">
                    <notes-list :notes="notesToShow"></notes-list>
                    <notes-add @newNoteAdded="addNewNote"></notes-add>
                </section>`,
    components: { notesList, notesAdd },
    data() {
        return {
            notes: [],
            filterTxt: ''
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

        eventBus.$on(EVENT_NOTE_DELETE, noteId => {
            this.deleteNote(noteId);
        });

        eventBus.$on(EVENT_SEARCH_INPUT, search => {
            this.filterTxt = search;
        });
    },
    destroyed() {
        eventBus.$off(EVENT_SEARCH_INPUT);
        eventBus.$off(EVENT_NOTE_DELETE);
    },
}