<template>
  <div class="sidebar">
    <div class="logo">后台管理</div>
    <ul>
      <li><router-link to="/dashboard">仪表盘</router-link></li>
      <li><router-link to="/publish-article">发布文章</router-link></li>
      <li><router-link to="/article-list">文章列表</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #2c3e50;
  color: white;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
}

.sidebar .logo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 15px;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  display: block;
  padding: 10px;
  transition: background-color 0.3s;
}

.sidebar ul li a:hover {
  background-color: #1abc9c;
}
</style>
