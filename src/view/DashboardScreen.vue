<template>
  <main class="main-dash">
    <HeaderComponent />
  </main>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default { components: { HeaderComponent } }
</script>
<style scoped>
.main-dash {
  width: 100vw;
  height: 100vh;
}
</style>
