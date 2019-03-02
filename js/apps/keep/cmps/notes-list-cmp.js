import noteCard from './note-card-cmp.js';

export default {
    template: `
                <section class="notes-list">
                    Pinned:
                    <transition-group tag="div" class="notes-grid-container" name="fade">
                            <note-card v-for="note in notesPinned" :note="note" :key="note.id"></note-card>
                    </transition-group>
                    Others:
                    <transition-group tag="div" class="notes-grid-container" name="fade">
                            <note-card v-for="note in notesOthers" :note="note" :key="note.id"></note-card>
                    </transition-group>
                </section>`,
    components: { noteCard },
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