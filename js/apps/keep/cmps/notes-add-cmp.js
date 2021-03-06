import utils from '../../../utils.js'
import {
    eventBus,
    EVENT_NOTE_EDIT,
    EVENT_NOTE_UPDATE
} from '../../../event-bus.js';

export default {
    template: `
                <section class="notes-add">
                    <transition name="fade">
                        <input v-if="addIsFocused" type="text" class="notes-add-input input-title glow-input"  placeholder="タイトル" 
                            v-model="addNoteTitle" @keyup.enter="onNoteAddInputEnter" @focus="addIsFocused = true">
                    </transition>
                    <input type="text"  ref="noteTxtInput" class="notes-add-input input-has-icon glow-input" placeholder="+ (テキスト, youtube, .jpg/.png)" 
                        v-model="addNoteTxt" @focus="addIsFocused = true" @blur="addIsFocused = false" @input="checkUrlType" @keyup.enter="onNoteAddInputEnter" @keyup.esc="stopEdit">
                    <!-- <button @click="onListClicked">List</button> -->
                    <div v-if="addNoteType === 'list'">
                    LIST
                    </div>
                    <div class="add-note-preview" v-if="addNoteType === 'img'"><img :src="imgPreviewUrl"></div>

                    <div class="add-note-preview" v-if="addNoteType === 'vid'"><iframe width="" height="" :src="youtubeEmbedUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                            
                </section>`,
    data() {
        return {
            editMode: { isOn: false, noteId: null },
            addNoteTxt: '',
            addNoteTitle: '',
            addNoteType: 'txt',
            addIsFocused: false,
            imgPreviewUrl: ''
        }
    },
    methods: {
        stopEdit() {
            eventBus.$emit(EVENT_NOTE_EDIT, false)
            this.editMode = { isOn: false, noteId: null };
        },
        resetInputs() {
            this.addNoteTxt = '';
            this.addNoteTitle = '';
            this.addNoteType = 'txt';
            this.imgPreviewUrl = '';
        },
        onNoteAddInputEnter() {
            if (!this.editMode.isOn) {
                if (this.addNoteTxt !== '' || this.addNoteTitle !== '') {
                    this.checkUrlType();
                    this.$emit('newNoteAdded', { type: this.addNoteType, title: this.addNoteTitle, txt: this.addNoteTxt })
                };
            } else {
                this.$emit('noteUpdated', { id: this.editMode.noteId, type: this.addNoteType, title: this.addNoteTitle, txt: this.addNoteTxt })
                this.stopEdit();
            }
            this.resetInputs();
        },
        onListClicked() {
            if (this.addNoteType !== 'list') {
                this.addNoteType = 'list';
            }
            else { this.addNoteType = 'txt'; }
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
    },
    created() {
        eventBus.$on(EVENT_NOTE_EDIT, ev => {
            if (ev) {
                if (!ev.isInEdit) {
                    this.editMode.isOn = false;
                    this.addNoteTitle = '';
                    this.addNoteTxt = '';
                    this.addNoteType = 'txt'
                    this.editMode.noteId = null;
                    this.$refs.noteTxtInput.blur();
                } else {
                    this.editMode.isOn = true;
                    this.addNoteTitle = ev.note.data.title;
                    this.addNoteTxt = ev.note.data.txt;
                    this.addNoteType = ev.note.type;
                    this.$refs.noteTxtInput.focus();
                    this.editMode.noteId = ev.note.id;
                    this.checkUrlType();
                }
            } else {
                this.editMode.isOn = false;
                this.addNoteTitle = '';
                this.addNoteTxt = '';
                this.addNoteType = 'txt'
                this.editMode.noteId = null;
                this.$refs.noteTxtInput.blur();
            }
        });
    },
    destroyed() {
        eventBus.$off(EVENT_NOTE_EDIT);
    },
}