<script lang="ts" setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
</script>

<template>
  <Sidebar />
  <div>
    <Header />
    <router-view />
  </div>
</template>

<style lang="scss" scoped></style>
