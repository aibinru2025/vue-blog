<template>
  <div class="header">
    <span>欢迎回来，用户名</span>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout() {
      // 处理退出登录的逻辑
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header span {
  font-size: 18px;
  color: #333;
}

.header button {
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.header button:hover {
  background-color: #c0392b;
}
</style>
