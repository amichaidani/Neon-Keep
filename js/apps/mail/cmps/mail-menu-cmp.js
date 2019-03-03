export default {
    template: `
                <section class="mail-menu">
                        <router-link to="/mail/compose"><span class="btn-icon btn-pen"></span></router-link>
                        <router-link to="/mail"><span class="btn-icon btn-inbox"></span></router-link>
                        <router-link to="/mail/sent"><span class="btn-icon btn-sent"></span></router-link>
                        <router-link to="/mail/starred"><span class="btn-icon btn-star"></span></router-link>
                        <router-link to="/trash"><span class="btn-icon btn-trash"></span></router-link>
                </section>`,
    data() {
        return {
        }
    },
    methods: {
        onInbox() {
            this.$emit('viewSelected', 'inbox');
        }
    }
}
