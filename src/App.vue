<script setup>
import SideBar from './components/SideBar.vue'
import DashboardScreen from './view/DashboardScreen.vue'
// import LoginScreen from './view/auth/LoginScreen.vue'
</script>

<template>
  <div class="container">
    <!-- <LoginScreen /> -->
    <SideBar />
    <DashboardScreen />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
