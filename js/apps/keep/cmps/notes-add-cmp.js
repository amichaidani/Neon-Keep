
export default {
    template: `
                <section class="notes-add">
                    <transition name="fade">
                        <input v-if="addIsFocused" type="text" class="notes-add-input input-title glow-input"  placeholder="タイトル" 
                            v-model="addNoteTitle" @keyup.enter="onNoteAddInputEnter">
                    </transition>
                    <input type="text" class="notes-add-input glow-input"  placeholder="新しいメモを追加" 
                        v-model="addNoteTxt" @focus="addIsFocused = true"  @input="testUrl" @keyup.enter="onNoteAddInputEnter">
                        <transition name="fade">
                            <div class="add-note-img-preview" v-if="addNoteType === 'img'"><img :src="imgPreviewUrl"></div>
                            <div class="add-note-video-preview" v-if="addNoteType === 'vid'"></div>
                        </transition>
                </section>`,
    data() {
        return {
            addNoteTxt: '',
            addNoteTitle: '',
            addNoteType: 'txt',
            addIsFocused: false,
            imgPreviewUrl: ''
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
            this.imgPreviewUrl = '';

        },
        testUrl() {
            let regexImg = '^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$';
            let regexVid = '^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$';
            let imgUrl = new RegExp(regexImg);
            let vidUrl = new RegExp(regexVid);
            if (imgUrl.test(this.addNoteTxt)) {
                this.addNoteType = 'img';
                this.imgPreviewUrl = this.addNoteTxt;
            } else if (vidUrl.test(this.addNoteTxt)) {
                this.addNoteType = 'vid';
                this.imgPreviewUrl = this.addNoteTxt;
                return;
            }
            else {
                this.addNoteType = 'txt';
                this.imgPreviewUrl = '';
            }
        }
    }
}