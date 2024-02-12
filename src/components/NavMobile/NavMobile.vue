<template>
  <main class="main-side">
    <!-- menu de navegação -->
    <nav class="main-nav">
      <ul>
        <li>
          <span><fa icon="circle-check" style="font-size: 35px" /></span>
        </li>
        <li><fa icon="chart-column" style="font-size: 35px" /></li>
        <li>
          <span><fa icon="cogs" style="font-size: 35px" /></span>
        </li>
      </ul>
      <span class="user-logo">P</span>
    </nav>
  </main>
</template>

<!-- funcional -->
<script>
export default {}
</script>

<!-- styles -->
<style scoped>
/* Editando primeiro o main */
.main-side {
  display: none;
  width: 100%;
  justify-content: center;
  align-items: center;
}

@media (max-width: 800px) {
  .main-side {
    display: flex;
  }
}

/* Configuração da navegação */
.main-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #0a79ff;

  ul {
    display: flex;
    color: #ffffff;
    gap: 10px;
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    gap: 10px;
  }
}

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
</style>
