
export default {
    template: `
                <section class="notes-add">
                    <input type="text" class="notes-add-input"  placeholder="新しいメモを追加" v-model="addNoteInput" @change="onNoteAddInputChange()">
                </section>`,
    data() {
        return {
            addNoteInput: ''
        }
    },
    methods: {
        onNoteAddInputChange() {
            this.$emit('newNoteAdded', this.addNoteInput)
        }
    }
}