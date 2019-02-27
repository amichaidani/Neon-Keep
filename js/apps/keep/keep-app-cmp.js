import notesService from './services/notes-service.js'
import notesList from './cmps/notes-list-cmp.js';
import notesAdd from './cmps/notes-add-cmp.js';

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
    methods:{
        addNewNote(ev){
            console.log(ev);   
        }
    },
    created() {
        this.notes = notesService.getNotes();
    }
}