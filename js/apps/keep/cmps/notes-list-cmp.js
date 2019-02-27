import noteCard from './note-card-cmp.js';

export default {
    template: `
                <section class="notes-list">
                    <note-card v-for="note in notes" :note="note" :key="note.id"></note-card>
                </section>`,
    components: { noteCard },
    props: ['notes'],
    data() {
        return {
        }

    }
}