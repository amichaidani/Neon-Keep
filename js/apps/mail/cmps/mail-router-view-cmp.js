
export default {
    template: `
                <section class="mail-router-view">
                    <router-view :mails="mails"></router-view>
                </section>
               `,
    props: ['mails'],
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    },
    created() {

    }
}