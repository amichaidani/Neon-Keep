import noteCard from './note-card-cmp.js';

export default {
    template: `
                <section class="notes-list">
                    <transition-group tag="div" class="notes-grid-container">
                        <note-card v-for="note in notes" :note="note" :key="note.id"></note-card>
                    </transition-group>
                </section>`,
    components: { noteCard },
    props: ['notes'],
    data() {
        return {
        }

    }
}