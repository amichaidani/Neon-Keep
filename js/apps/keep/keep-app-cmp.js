import notesService from './services/notes-service.js'
import notesList from './cmps/notes-list-cmp.js';
import notesAdd from './cmps/notes-add-cmp.js';

export default {
    template: `
                <section class="keep-app">
                    <notes-add></notes-add>
                    <notes-list :notes="notes"></notes-list>
                </section>`,
    components: { notesList, notesAdd },
    data() {
        return {
            notes: []
        }
    },
    created() {
        this.notes = notesService.getNotes();
    }
}