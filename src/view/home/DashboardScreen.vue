<template>
  <main class="main-dash">
    <HeaderComponent />
    <div class="home-content">
      <SideBar />
      <SideSubMenu />

      <TaskScreen />
    </div>
    <NavMobile />
  </main>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import SideSubMenu from './SideSubMenu/SideSubMenu.vue'
import TaskScreen from './TaskScreen/TaskScreen.vue'
import NavMobile from '@/components/NavMobile/NavMobile.vue'
import SideBar from '@/components/SideBar.vue'

export default { components: { HeaderComponent, SideSubMenu, TaskScreen, NavMobile, SideBar } }
</script>
<style scoped>
.main-dash {
  width: 100vw;
  height: 100%;
}

.home-content {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
