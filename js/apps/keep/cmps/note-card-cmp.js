import noteCardTools from './note-card-tools-cmp.js'

export default {
    template: `
                <section class="note-card">
                        <h2>{{note.data.title}}</h2>
                        <div class="note-content">
                            {{note.data.content}}
                        </div>
                        <note-card-tools :noteid="note.id"></note-card-tools>
                </section>`,
    props: ['note'],
    components: {
        noteCardTools
    },
    data() {
        return {
        }
    },
    created() {
    }
}