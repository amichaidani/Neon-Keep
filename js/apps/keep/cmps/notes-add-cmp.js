
export default {
    template: `
                <section class="notes-add">
                    <transition name="fade">
                        <input v-if="addIsFocused" type="text" class="notes-add-input input-title glow-input"  placeholder="タイトル" 
                            v-model="addNoteTitle" @keyup.enter="onNoteAddInputEnter">
                    </transition>
                    <input type="text" class="notes-add-input glow-input"  placeholder="新しいメモを追加" 
                        v-model="addNoteTxt" @focus="addIsFocused = true" @input="checkUrlType" @keyup.enter="onNoteAddInputEnter">
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
        checkUrlType() {
            let regexImg = '(^https?:\/\/.*\.(?:png|jpg))$';
            let imgUrl = new RegExp(regexImg, "i");
            if (imgUrl.test(this.addNoteTxt)) {
                this.addNoteType = 'img';
                this.imgPreviewUrl = this.addNoteTxt;
            } else {
                this.addNoteType = 'txt';
                this.imgPreviewUrl = '';
            }
        }
    }
}