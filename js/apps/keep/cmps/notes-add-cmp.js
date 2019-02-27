
export default {
    template: `
                <section class="notes-add">
                    <transition name="fade">
                        <input v-if="addIsFocused" type="text" class="notes-add-input"  placeholder="Title" 
                            v-model="addNoteTitle" @keyup.enter="onNoteAddInputChange">
                    </transition>
                    <input type="text" class="notes-add-input"  placeholder="新しいメモを追加" 
                        v-model="addNoteTxt" @focus="addIsFocused = true"  @keyup.enter="onNoteAddInputChange">
                </section>`,
    data() {
        return {
            addNoteTxt: '',
            addNoteTitle: '',
            addIsFocused: false
        }
    },
    methods: {
        onNoteAddInputChange() {
            this.$emit('newNoteAdded', { type: 'txt', title: this.addNoteTitle, txt: this.addNoteTxt })
            this.addNoteTxt = '';
            this.addNoteTitle = '';
        }
    }
}