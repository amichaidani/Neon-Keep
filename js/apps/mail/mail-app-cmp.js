import mailService from './services/mail-service.js'
import mailMenu from './cmps/mail-menu-cmp.js'
import mailRouterView from './cmps/mail-router-view-cmp.js'
import { eventBus, EVENT_MAIL_STAR, EVENT_SEARCH_INPUT } from '../../event-bus.js'


export default {
    template: `
                <section class="mail-app">
                <mail-menu></mail-menu>
                    <mail-router-view :mails="mailAfterFilter"></mail-router-view>
                </section>`,
    components: {
        mailMenu,
        mailRouterView
    },
    data() {
        return {
            mails: [],
            filterTxt: ''
        }
    },
    methods: {
        onMailStar(mailId) {
            mailService.mailStar(mailId);
        }
    },
    computed: {
        mailAfterFilter() {
            let filterTxt = this.filterTxt.toLowerCase()
            return this.mails.filter(mail => mail.subject.toLowerCase().includes(filterTxt) || mail.body.toLowerCase().includes(filterTxt))
        }
    },
    created() {
        mailService.getMails().then(mails => this.mails = mails)

        eventBus.$on(EVENT_MAIL_STAR, mailId => {
            this.onMailStar(mailId);
        });

        eventBus.$on(EVENT_SEARCH_INPUT, search => {
            this.filterTxt = search;
        });


    },
    destroyed() {
        eventBus.$off(EVENT_MAIL_STAR);
        eventBus.$off(EVENT_SEARCH_INPUT);
    }
}