
import { eventBus, EVENT_NOTE_DELETE, EVENT_NOTE_DUPLICATE } from '../../../event-bus.js';

export default {
    template: `
                <section class="note-card-tools">
                        <button class="btn-icon btn-tool btn-trash" title="削除する" @click="onTool(tools.delete)"></button>
                        <button class="btn-icon btn-tool btn-duplicate" title="複製する" @click="onTool(tools.duplicate)"></button>
                </section>`,

    props: ['noteid'],
    data() {
        return {
            tools: {
                delete: 'delete',
                duplicate: 'duplicate'
            }
        }
    },
    methods: {
        onTool(tool) {
            if (tool === this.tools.delete) {
                eventBus.$emit(EVENT_NOTE_DELETE, this.noteid);
            } else if (tool === this.tools.duplicate) {
                eventBus.$emit(EVENT_NOTE_DUPLICATE, this.noteid);
            }
        }
    },
    created() {
    }
}