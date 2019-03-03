import homeCmp from './pages/home-cmp.js';
import keepApp from './apps/keep/keep-app-cmp.js';
import mailApp from './apps/mail/mail-app-cmp.js';
import mailInbox from './apps/mail/pages/mail-inbox-cmp.js';
import mailSent from './apps/mail/pages/mail-sent-cmp.js';
import mailStarred from './apps/mail/pages/mail-starred-cmp.js';

const routes = [
    {
        path: '/', component: homeCmp, meta: {
            title: 'こんにちは',
            isSearchablePage: false
        }
    },
    {
        path: '/keep', component: keepApp, meta: {
            title: '守る',
            isSearchablePage: true
        }
    },
    {
        path: '/mail', component: mailApp,
        meta: {
            title: '電子メール',
            isSearchablePage: true
        },
        children: [
            {
                path: '', component: mailInbox, meta: {
                    title: '電子メール', isSearchablePage: true
                }
            },
            {
                path: 'sent', component: mailSent, meta: {
                    title: '電子メール', isSearchablePage: true
                }
            },
            {
                path: 'starred', component: mailStarred, meta: {
                    title: '電子メール', isSearchablePage: true
                }
            },
        ]
    }
]

export default routes;
