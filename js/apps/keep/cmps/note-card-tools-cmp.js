
import {
    eventBus,
    EVENT_NOTE_DELETE,
    EVENT_NOTE_DUPLICATE,
    EVENT_NOTE_COLOR,
    EVENT_NOTE_EDIT,
    EVENT_NOTE_PIN
} from '../../../event-bus.js';

export default {
    template: `
                <section class="note-card-tools">
                        <button class="btn-icon btn-tool btn-trash" title="削除する" @click="onTool(tools.delete)"></button>
                        <button class="btn-icon btn-tool btn-duplicate" title="複製する" @click="onTool(tools.duplicate)"></button>
                        <button class="btn-icon btn-tool" :class="editIcon" title="複製する" @click="onTool(tools.edit)"></button>
                        <!-- <input v-model="colorInputValue" type="color" @change="onTool(tools.color)"> -->
                        <button class="btn-icon btn-tool btn-pin"  title="複製する" @click="onTool(tools.pin)"></button>
                </section>`,

    props: ['note'],
    data() {
        return {
            tools: {
                delete: 'delete',
                duplicate: 'duplicate',
                edit: 'edit',
                color: 'color',
                pin: 'pin'
            },
            noteId: this.note.id,
            colorInputValue: '#ffffff;',
            thisInEdit: false,
            otherInEdit: false
        }
    },
    methods: {
        onTool(tool) {
            if (tool === this.tools.delete) {
                eventBus.$emit(EVENT_NOTE_DELETE, this.noteId);
            }
            else if (tool === this.tools.duplicate) {
                eventBus.$emit(EVENT_NOTE_DUPLICATE, this.noteId);
            }
            else if (tool === this.tools.color) {
                eventBus.$emit(EVENT_NOTE_COLOR, { id: this.noteId, color: this.colorInputValue })
            }
            else if (tool === this.tools.edit) {
                if (this.thisInEdit) {
                    eventBus.$emit(EVENT_NOTE_EDIT, false)
                    this.otherInEdit = false;
                    this.isInEdit = false;
                    return;
                }

                if (this.otherInEdit) return;

                this.thisInEdit = true;
                eventBus.$emit(EVENT_NOTE_EDIT, { note: this.note, isInEdit: this.thisInEdit })
            }
            else if (tool === this.tools.pin) {
                eventBus.$emit(EVENT_NOTE_PIN, this.noteId)
            }
        }
    },
    computed: {
        editIcon() {
            return { 'btn-edit': !this.thisInEdit, 'btn-edit-activated': this.thisInEdit }
        }
    },
    created() {
        eventBus.$on(EVENT_NOTE_EDIT, ev => {
            if (ev) {
                if (ev.note.id === this.noteId) {
                    this.thisInEdit = ev.isInEdit;
                } else {
                    this.otherInEdit = true;
                }
            } else {
                this.thisInEdit = false;
                this.otherInEdit = false;
            }
        });
    },
    destroyed() {
        eventBus.$off(EVENT_NOTE_EDIT);
    },
}