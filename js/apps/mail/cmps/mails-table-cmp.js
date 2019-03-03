import formattedTime from './formatted-time-cmp.js'
import { eventBus, EVENT_MAIL_STAR } from '../../../event-bus.js'

export default {
    template: `
                <section class="mails-table">
                    <div v-if="isMails">
                    <h4>{{title}}</h4>
                        <table >
                            <tbody>
                                <tr v-for="mail in mails"  class="mails-table-row" :class="{'mail-unread': !mail.isRead}" >
                                    <td class="mail-star"><span class="btn-icon" :class="{'btn-star' : !mail.isStar, 'btn-star-activated' : mail.isStar}" @click="onStarMail(mail.id)"></span></td>
                                    <td class="mail-from">{{mail.from}}</td>
                                    <td class="mails-table-subject"><p>{{mail.subject}}</p></td>
                                    <td class="mails-table-body"><p>{{mail.body}}</p></td>
                                    <td class="mail-time"><formatted-time :time="mail.sentAt"></formatted-time></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>`,

    props: ['mails','title'],
    components: {
        formattedTime
    },
    data() {
        return {
        }
    },
    methods: {
        onStarMail(mailId) {
            eventBus.$emit(EVENT_MAIL_STAR, mailId);
        }
    },
    computed: {
        isMails() {
            return this.mails.length > 0;
        }
    },
    created() {
    }
}