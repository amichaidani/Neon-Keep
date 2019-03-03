import noteCardTools from './note-card-tools-cmp.js';
import utils from '../../../utils.js';

export default {
    template: `
                <section class="note-card" :style="{backgroundColor : note.color}">
                        <div class="note-card-content">
                            <div v-if="note.type === 'list'" class="note-card-list">List Goes Here</div>

                            <div v-if="note.type === 'img'" class="note-card-media-container">
                                <a :href="note.data.txt"  target="_blank"><img class="note-card-img" :src="note.data.txt"></a>
                            </div>

                            <div v-if="note.type === 'vid'" class="note-card-media-container">
                            <iframe :src="youtubeEmbedUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>

                            <div class="note-card-text" v-if="note.data.title !== '' || note.type === 'txt'"> 
                            <h4 v-if="note.data.title !== ''">{{note.data.title}}</h4>    
                            <div  v-if="note.type === 'txt'">{{note.data.txt}}</div>
                            </div>
                        </div>
                        <note-card-tools :note="note"></note-card-tools>
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
        youtubeEmbedUrl() {
            return utils.youtubeEmbedUrl(this.note.data.txt);
        }
    }
}