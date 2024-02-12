<template>
  <main class="main-side">
    <!-- logo -->
    <div class="logo">
      <img src="./icons/logo.svg" alt="logo" />
    </div>
    <!-- menu de navegação -->
    <nav class="main-nav">
      <ul>
        <li>
          <span><fa icon="circle-check" style="font-size: 35px" /></span>Tarefas
        </li>
        <li><fa icon="chart-column" style="font-size: 35px" />Dashboard</li>
        <li>
          <span><fa icon="cogs" style="font-size: 35px" /></span>Configurações
        </li>
      </ul>
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
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 120px;
  background-color: #0a79ff;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
@media (max-width: 800px) {
  .main-side {
    display: none;
  }
}
/* Propriedade do logo */
.logo {
  position: absolute;
  top: 10px;
}

/* Configuração da navegação */
.main-nav {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;

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
</style>
