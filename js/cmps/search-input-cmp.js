import { eventBus, EVENT_SEARCH_INPUT } from '../event-bus.js';


export default {
    template: ` <div class="skew-wrapper pink-outline search-container">
    <li class="unskew"><input type="search" v-model="search" ref="search" class="input-search" @keyup="onSearchKeyup"></li>
</div>`,
    data() {
        return {
            search: ''
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