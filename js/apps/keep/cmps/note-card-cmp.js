export default {
    template: `
                <section class="note-card">
                        <h2>{{note.data.title}}</h2>
                        <div class="note-content">
                            {{note.data.content}}
                        </div>
                </section>`,
    props: ['note'],
    data() {
        return {
        }
    },
    created() {
    }
}