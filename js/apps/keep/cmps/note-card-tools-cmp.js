

export default {
    template: `
                <section class="note-card-tools">
                        <button class="btn-icon btn-tool btn-trash" title="Trash" @click="onDeleteNote(tools.delete)"></button>
                </section>`,
    data() {
        return {
            tools: {
                delete: 'delete'
            }
        }
    },
    methods: {
        onDeleteNote(tool) {
            this.$emit('onToolClicked', tool)
        }
    }
}