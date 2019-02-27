export default {
    template: `
                <section class="note-card">
                    {{note.content}}, {{note.type}}, {{note.id }}
                </section>`,
    props: ['note'],
    data() {
        return {
        }
    },
    created() {
    }
}