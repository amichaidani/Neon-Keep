
import { eventBus, EVENT_NOTE_DELETE } from '../../../event-bus.js';

export default {
    template: `
                <section class="note-card-tools">
                        <button class="btn-icon btn-tool btn-trash" title="削除する" @click="onDeleteNote(tools.delete)"></button>
                </section>`,
    props: ['noteid'],
    data() {
        return {
            tools: {
                delete: 'delete'
            }
        }
    },
    methods: {
        onDeleteNote(tool) {
            eventBus.$emit(EVENT_NOTE_DELETE, this.noteid)
        }
    },
}