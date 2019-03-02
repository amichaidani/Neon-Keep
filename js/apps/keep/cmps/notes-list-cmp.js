import noteCard from './note-card-cmp.js';

export default {
    template: `
                <section class="notes-list">
                    <h4 v-if="notesPinned.length > 0">Pinned:</h4>
                    <transition-group tag="div" class="notes-grid-container notes-pinned" name="fade">
                            <note-card v-for="note in notesPinned" :note="note" :key="note.id"></note-card>
                    </transition-group>
                    <h4>Others:</h4>
                    <transition-group tag="div" class="notes-grid-container notes-others" name="fade">
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