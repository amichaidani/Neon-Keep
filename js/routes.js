import homeCmp from './pages/home-cmp.js';
import keepApp from './apps/keep/keep-app-cmp.js';
import mailApp from './apps/mail/mail-app-cmp.js';

const routes = [
    {
        path: '/', component: homeCmp, meta: { title: 'こんにちは', isSearchablePage: false }
    },
    {
        path: '/keep', component: keepApp, meta: { title: '守る', isSearchablePage: true }
    },
    {
        path: '/mail', component: mailApp, meta: { title: '電子メール', isSearchablePage: true }
    }
]

export default routes;
