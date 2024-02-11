<template>
  <main class="main-dash">
    <HeaderComponent />
    <div class="home-content">
      <SideSubMenu />
      <TaskScreen />
    </div>
  </main>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import SideSubMenu from './SideSubMenu/SideSubMenu.vue'
import TaskScreen from './TaskScreen/TaskScreen.vue'

export default { components: { HeaderComponent, SideSubMenu, TaskScreen } }
</script>
<style scoped>
.main-dash {
  width: 100vw;
  height: 91.4vh;
}

.home-content {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
