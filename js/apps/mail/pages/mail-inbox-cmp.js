import mailsTable from '../cmps/mails-table-cmp.js';

export default {
    template: `
                <section class="mail-inbox">
                    <mails-table :mails="mailsUnread" :title="'Unread'"></mails-table>
                    <mails-table :mails="mailsRead" :title="'Read'"></mails-table>
                </section>
    
                `,
    props: ['mails'],
    components: {
        mailsTable
    },
    data() {
        return {
        }
    },
    computed: {
        mailsUnread() {
            return this.mails.filter(mail => !mail.isRead && mail.from !== 'me');
        },
        mailsRead() {
            return this.mails.filter(mail => mail.isRead && mail.from !== 'me');
        }
    },
    created() {
    },
}