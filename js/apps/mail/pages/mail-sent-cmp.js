import mailsTable from '../cmps/mails-table-cmp.js';

export default {
    template: `
                <section class="mail-inbox">
                    Sent:
                    <mails-table :mails="mailsStarred"></mails-table>
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
        mailsStarred() {
            return this.mails.filter(mail => mail.from === 'me');
        }
    },
    created() {
    },
}