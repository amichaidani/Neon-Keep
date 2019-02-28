import noteCardTools from './note-card-tools-cmp.js'

export default {
    template: `
                <section class="note-card">
                        <div class="note-content">

                            <div class="note-card-text" v-if="note.type === 'txt'"> 
                                <h2>{{note.data.title}}</h2>    
                            {{note.data.txt}}
                            </div>
                           <img v-if="note.type === 'img'" class="note-card-img" :src="note.data.txt"> 

                        </div>
                        <note-card-tools :noteid="note.id"></note-card-tools>
                </section>`,
    props: ['note'],
    components: {
        noteCardTools
    },
    data() {
        return {
        }
    },
    computed: {
        noteContent() {
        }
    },
    created() {
    }
}