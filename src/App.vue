<script setup>
import SideBar from './components/SideBar.vue'
import DashboardScreen from './view/DashboardScreen.vue'
</script>

<template>
  <div class="container">
    <SideBar />
    <DashboardScreen />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
