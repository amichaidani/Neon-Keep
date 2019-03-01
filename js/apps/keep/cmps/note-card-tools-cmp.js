
import { eventBus, EVENT_NOTE_DELETE, EVENT_NOTE_DUPLICATE, EVENT_NOTE_COLOR } from '../../../event-bus.js';

export default {
    template: `
                <section class="note-card-tools">
                        <button class="btn-icon btn-tool btn-trash" title="削除する" @click="onTool(tools.delete)"></button>
                        <button class="btn-icon btn-tool btn-duplicate" title="複製する" @click="onTool(tools.duplicate)"></button>
                        <input v-model="colorInputValue" type="color" @change="onTool(tools.color)">
                </section>`,

    props: ['noteid'],
    data() {
        return {
            tools: {
                delete: 'delete',
                duplicate: 'duplicate',
                color: 'color'
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
            }
        }
    },
    created() {
    }
}