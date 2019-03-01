import noteCardTools from './note-card-tools-cmp.js';
import utils from '../../../utils.js';

export default {
    template: `
                <section class="note-card">
                        <div class="note-content">
                            <div v-if="note.type === 'list'" class="note-card-list">List Goes Here</div>
                                <div v-if="note.type === 'vid'" class="note-card-vid" >
                                
                                </div>

                            <img v-if="note.type === 'img'" class="note-card-img" :src="note.data.txt"> 

                            <div v-if="note.type === 'vid'" class="note-card-video-container">
                            <iframe width="560" height="315" :src="youtubeEmbedUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div class="note-card-text"> 
                            <h4 v-if="note.data.title !== ''">{{note.data.title}}</h4>    
                                <div  v-if="note.type === 'txt'">
                                {{note.data.txt}}
                                </div>
                        
                            </div>
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
        },
        youtubeEmbedUrl(){
            return utils.youtubeEmbedUrl(this.note.data.txt);
        }
    },
    created() {
    },
}