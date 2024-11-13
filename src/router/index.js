import { createRouter, createWebHistory } from 'vue-router';
import Login from '../auth/Login.vue';
import Dashboard from '../dashboard/Dashboard.vue';
import PublishArticle from '../article/PublishArticle.vue';
import ArticleList from '../article/ArticleList.vue';

const routes = [
    { path: '/', component: Login }, // 登录页
    { path: '/login', component: Login }, // 登录页
    { path: '/dashboard', component: Dashboard }, // 后台仪表盘
    { path: '/publish-article', component: PublishArticle }, // 发布文章页
    { path: '/article-list', component: ArticleList } // 文章列表页
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 路由守卫：检查是否已登录
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // 判断登录状态
    const protectedRoutes = ['/dashboard', '/publish-article', '/article-list']; // 受保护路由

    // 如果用户访问受保护页面，而没有登录，跳转到登录页面
    if (protectedRoutes.includes(to.path) && !isLoggedIn) {
        next('/login'); // 跳转到登录页
    } else {
        next(); // 否则，正常跳转
    }
});

export default router;
