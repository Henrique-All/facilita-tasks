<template>
  <header class="main-header">
    <span class="user-logo">P</span>
    <div class="user-description">
      <p>Eduardo Pereira da Costa</p>
      <p class="sub-description">Front-end Developer</p>
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style scoped>
.main-header {
  position: absolute;
  display: flex;
  justify-content: end;
  width: 100%;
  height: 80px;
  align-items: center;
  padding: 0 30px 0 0;
  gap: 10px;
  border-bottom: rgba(0, 0, 0, 0.05) 2px solid;
  background-color: #ffffff;

  .user-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    color: white;
  }

  .user-description {
    .sub-description {
      color: #40a0ff;
      font-size: 14px;
    }
  }
}

@media (max-width: 800px) {
  .main-header {
    display: none;
  }
}
</style>
