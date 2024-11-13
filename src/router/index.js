import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/auth/Login.vue';
import LayoutView from '../layout/LayoutView.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';
import PublishArticle from '../views/article/PublishArticle.vue';
import ArticleList from '../views/article/ArticleList.vue';

const routes = [
  { path: '/login', component: Login }, // 登录页
  {
    path: '/',
    component: LayoutView,
    children: [
      { path: 'dashboard', component: Dashboard }, // 后台仪表盘
      { path: 'publish-article', component: PublishArticle }, // 发布文章页
      { path: 'article-list', component: ArticleList } // 文章列表页
    ]
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 路由守卫：检查是否已登录
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // 判断登录状态
    const protectedRoutes = ['/','/dashboard', '/publish-article', '/article-list']; // 受保护路由

    // 如果用户访问受保护页面，而没有登录，跳转到登录页面
    if (protectedRoutes.includes(to.path) && !isLoggedIn) {
        next('/login'); // 跳转到登录页
    } else {
        next(); // 否则，正常跳转
    }
});

export default router;
