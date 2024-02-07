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
  display: flex;
  justify-content: end;
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 0 30px 0 0;
  gap: 10px;

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
</style>
