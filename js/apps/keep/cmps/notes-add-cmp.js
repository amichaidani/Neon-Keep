import utils from '../../../utils.js'
export default {
    template: `
                <section class="notes-add">
                    <transition name="fade">
                        <input v-if="addIsFocused" type="text" class="notes-add-input input-title glow-input"  placeholder="タイトル" 
                            v-model="addNoteTitle" @keyup.enter="onNoteAddInputEnter">
                    </transition>
                    <input type="text" class="notes-add-input glow-input"  placeholder="+ 新しいメモを追加" 
                        v-model="addNoteTxt" @focus="addIsFocused = true" @input="checkUrlType" @keyup.enter="onNoteAddInputEnter">
                    
                        <div class="add-note-img-preview" v-if="addNoteType === 'img'"><img :src="imgPreviewUrl"></div>

                    <div class="add-note-video-preview" v-if="addNoteType === 'vid'"><iframe width="560" height="315" :src="youtubeEmbedUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            
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
            let regexImg = /(^https?:\/\/.*\.(?:png|jpg))$/i;
            let regexVid = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm;
            if (regexImg.test(this.addNoteTxt)) {
                this.addNoteType = 'img';
                this.imgPreviewUrl = this.addNoteTxt;
            } else if (regexVid.test(this.addNoteTxt)) {
                this.addNoteType = 'vid';
            } else {
                this.addNoteType = 'txt';
                this.imgPreviewUrl = '';
            }
        }
    },
    computed: {
        youtubeEmbedUrl() {
            if (this.addNoteType === 'vid') {
                return utils.youtubeEmbedUrl(this.addNoteTxt);
            }
        }
    }
}