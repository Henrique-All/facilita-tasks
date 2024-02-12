<script setup>
import NavMobile from './components/NavMobile/NavMobile.vue'
import SideBar from './components/SideBar.vue'
import DashboardScreen from '@/view/home/DashboardScreen.vue'
// import LoginScreen from './view/auth/LoginScreen.vue'
</script>

<template>
  <div class="container">
    <!-- <LoginScreen /> -->
    <SideBar />
    <DashboardScreen />
    <NavMobile />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
