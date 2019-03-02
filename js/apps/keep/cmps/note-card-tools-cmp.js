
import { eventBus, EVENT_NOTE_DELETE, EVENT_NOTE_DUPLICATE, EVENT_NOTE_COLOR, EVENT_NOTE_EDIT,EVENT_NOTE_PIN } from '../../../event-bus.js';

export default {
    template: `
                <section class="note-card-tools">
                        <button class="btn-icon btn-tool btn-trash" title="削除する" @click="onTool(tools.delete)"></button>
                        <button class="btn-icon btn-tool btn-duplicate" title="複製する" @click="onTool(tools.duplicate)"></button>
                        <button class="btn-icon btn-tool btn-edit" title="複製する" @click="onTool(tools.edit)"></button>
                        <input v-model="colorInputValue" type="color" @change="onTool(tools.color)">
                        <button class="btn-icon btn-tool btn-pin" title="複製する" @click="onTool(tools.pin)"></button>
                </section>`,

    props: ['noteid'],
    data() {
        return {
            tools: {
                delete: 'delete',
                duplicate: 'duplicate',
                edit: 'edit',
                color: 'color',
                pin: 'pin'
            },
            colorInputValue: '#ffffff;'
        }
    },
    methods: {
        onTool(tool) {
            if (tool === this.tools.delete) {
                eventBus.$emit(EVENT_NOTE_DELETE, this.noteid);
            } else if (tool === this.tools.duplicate) {
                eventBus.$emit(EVENT_NOTE_DUPLICATE, this.noteid);
            } else if (tool === this.tools.color) {
                eventBus.$emit(EVENT_NOTE_COLOR, { id: this.noteid, color: this.colorInputValue })
            } else if (tool === this.tools.edit) {
                eventBus.$emit(EVENT_NOTE_EDIT, this.noteid)
            } else if (tool === this.tools.pin) {
                eventBus.$emit(EVENT_NOTE_PIN, this.noteid)
            }
        }
    },
    created() {
    }
}