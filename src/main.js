//这一行导入了一个 CSS 文件。main.css 是位于 assets 文件夹下的一个样式文件。这样做的目的是将全局样式应用到 Vue 应用中。
import './assets/main.css'

//从 Vue 库中导入了 createApp 函数。createApp 是 Vue 3 中创建一个 Vue 应用实例的核心函数。
import { createApp } from 'vue';
//导入了 App.vue 文件，这个文件是 Vue 3 应用的根组件。App.vue 通常包含应用的结构和逻辑。
import App from './App.vue';
import router from './router';

//创建根组件，将 Vue 应用挂载到 HTML 页面中的 id="app" 的 DOM 元素上
createApp(App)
    .use(router)  // 使用路由
    .mount('#app');
