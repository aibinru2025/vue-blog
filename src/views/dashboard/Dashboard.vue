<template>
  <div class="dashboard">
    <h2>仪表盘</h2>
    <p>欢迎来到后台管理系统！</p>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dashboard h2 {
  color: #333;
}

.dashboard p {
  font-size: 16px;
  color: #555;
}
</style>
