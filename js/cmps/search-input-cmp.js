import { eventBus, EVENT_SEARCH_INPUT } from '../event-bus.js';


export default {
    template: ` <div class="skew-wrapper pink-outline search-container glow-search-container">
    <li class="unskew">
        <input type="search" class="input-search" 
            v-model="search" @input="onSearchKeyup" @blur="console.log('yay')">
    </li>
</div>`,
    data() {
        return {
            search: '',
        }
    },
    methods: {
        onSearchKeyup() {
            eventBus.$emit(EVENT_SEARCH_INPUT, this.search.toLowerCase());
        }
    },
    mounted() {
        this.$refs.search.focus();
    }
}