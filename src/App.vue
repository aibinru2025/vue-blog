<!--<template>
  <div id="app">
    <router-view></router-view> &lt;!&ndash; 这里渲染当前路由的组件 &ndash;&gt;
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>-->


<template>
  <div id="app">
    <!-- 判断是否已登录，登录后显示 Sidebar 和 Header -->
    <Sidebar v-if="isLoggedIn" />
    <div >
      <Header  v-if="isLoggedIn"/>
      <router-view />
    </div>
  </div>

</template>

<script>
import Sidebar from './layout/Sidebar.vue';  // 导入 Sidebar 组件
import Header from './layout/Header.vue';    // 导入 Header 组件

export default {
  name: 'App',
  components: {
    Sidebar,
    Header
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem('isLoggedIn') === 'true';  // 根据登录状态显示 Sidebar 和 Header
    }
  }
}
</script>
