
export default {
    template: `
                <section class="notes-add">
                    <transition name="fade">
                        <input v-if="addIsFocused" type="text" class="notes-add-input input-title glow-input"  placeholder="タイトル" 
                            v-model="addNoteTitle" @keyup.enter="onNoteAddInputChange">
                    </transition>
                    <input type="text" class="notes-add-input glow-input"  placeholder="新しいメモを追加" 
                        v-model="addNoteTxt" @focus="addIsFocused = true" @keyup="testUrl" @input="testUrl" @keyup.enter="onNoteAddInputEnter">
                        <transition name="fade">
                            <div class="add-note-img-preview" v-if="addNoteType === 'img'"><img :src="imgPreviewUrl"></div>
                        </transition>
                </section>`,
    data() {
        return {
            addNoteTxt: '',
            addNoteTitle: '',
            addNoteType: 'txt',
            addIsFocused: false,
            imgPreviewUrl: '//:0'
        }
    },
    methods: {
        onNoteAddInputEnter() {
            if (this.addNoteTxt !== '' || this.addNoteTitle !== '') {
                this.$emit('newNoteAdded', { type: this.addNoteType, title: this.addNoteTitle, txt: this.addNoteTxt })
            };
            this.addNoteTxt = '';
            this.addNoteTitle = '';
            this.addNoteType = 'txt';
        },
        testUrl() {
            let regexStr = '^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$'
            let imgUrl = new RegExp(regexStr, "i");

            if (imgUrl.test(this.addNoteTxt)) {
                this.imgPreviewUrl = this.addNoteTxt;
                this.addNoteType = 'img';
            }
            else {

                this.addNoteType = 'txt';
            }
        }
    }
}