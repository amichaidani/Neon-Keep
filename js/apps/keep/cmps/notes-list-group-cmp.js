import notesList from './notes-list-cmp.js';

export default {
    template: `
                <section class="notes-list-group">
                    <notes-list :notes="notesPinned" :listname="'pinned'" :addedclass="'notes-pinned'"></notes-list>
                    <notes-list :notes="notesOthers" :listname="'others'"></notes-list>
                </section>`,
    components: { notesList },
    props: ['notes'],
    data() {
        return {
        }

    },
    computed: {
        notesPinned() {
            return this.notes.filter(note => note.isPinned);
        },
        notesOthers() {
            return this.notes.filter(note => !note.isPinned);
        }
    }
}