import myRoutes from './routes.js';
const myRouter = new VueRouter({ routes: myRoutes });


new Vue({
    el: '#app',
    router: myRouter,
    components: {
    },
    data: {
        pageTitle: '',
        isSearchablePage: false
    },
    computed: {
    },
    created() {
        this.pageTitle = this.$route.meta.title;
    },
    watch: {
        $route(to, from) {
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