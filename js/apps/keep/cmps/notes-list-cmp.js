import noteCard from './note-card-cmp.js';

export default {
    template: `
                <section v-if="isNotEmptyList" class="notes-list" :class="addedclass">
                    <h4>{{ listname }}</h4>
                    <transition-group tag="div" class="notes-grid-container" name="fade">
                            <note-card v-for="note in notes" :note="note" :key="note.id"></note-card>
                    </transition-group>
                </section>`,
    components: { noteCard },
    props: ['notes', 'listname', 'addedclass'],
    data() {
        return {
        }
    },
    computed: {
        isNotEmptyList() {
            return this.notes.length > 0;
        }
    }
}