import homeCmp from './pages/home-cmp.js';
import keepApp from './apps/keep/keep-app-cmp.js';

const routes = [
    {
        path: '/', component: homeCmp, meta: { title: 'こんにちは' }
    },
    {
        path: '/keep', component: keepApp, meta: { title: '守る' }
    }
]

export default routes;
