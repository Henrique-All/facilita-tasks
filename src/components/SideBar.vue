<template>
  <main class="main-side">
    <!-- logo -->
    <div class="logo">
      <img src="./icons/logo.svg" alt="logo" />
    </div>
    <!-- menu de navegação -->
    <nav class="main-nav">
      <a href="#"><fa icon="chart-column" style="font-size: 35px" />Dashboard</a>
      <a href="#"
        ><span><fa icon="circle-check" style="font-size: 35px" /></span>Tarefas</a
      >
      <a href="#"
        ><span><fa icon="cogs" style="font-size: 35px" /></span>Configurações</a
      >
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
  width: 9%;
  background-color: #0a79ff;
  justify-content: center;
  align-items: center;
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

  a {
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
