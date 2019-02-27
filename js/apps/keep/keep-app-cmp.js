import notesService from './services/notes-service.js'
import notesList from './cmps/notes-list-cmp.js';

export default {
    template: `
                <section class="keep-app">
                    <notes-list :notes="notes"></notes-list>
                </section>`,
    components: { notesList },
    data() {
        return {
            notes: []
        }
    },
    created() {
        this.notes = notesService.getNotes();
    }
}