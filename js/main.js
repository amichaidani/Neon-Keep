import myRoutes from './routes.js';
const myRouter = new VueRouter({ routes: myRoutes });


new Vue({
    el: '#app',
    router: myRouter,
    components: {
    },
    data: {
        pageTitle: ''
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
        }
    }
})