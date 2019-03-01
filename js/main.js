import searchInput from './cmps/search-input-cmp.js';
import myRoutes from './routes.js';
const myRouter = new VueRouter({ routes: myRoutes });

new Vue({
    el: '#app',
    router: myRouter,
    components: {
        searchInput
    },
    data: {
        pageTitle: '',
        isSearchablePage: false,
        isSearchInputVisible: false
    },
    methods: {
        onClickedSearch() {
            this.isSearchInputVisible = !this.isSearchInputVisible;
            
        }
    },
    computed: {
    },
    created() {
        this.pageTitle = this.$route.meta.title;
        this.isSearchablePage = this.$route.meta.isSearchablePage;

    },
    watch: {
        $route(to, from) {
            this.isSearchInputVisible = false;
            let pageTitleNew = to.meta.title;
            this.pageTitle = pageTitleNew;
            document.title = pageTitleNew;

            if (to.meta.isSearchablePage === true) {
                this.isSearchablePage = true;
            }
            else {
                this.isSearchablePage = false;
            }

        }
    }
})