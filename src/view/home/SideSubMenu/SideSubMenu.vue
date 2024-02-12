<template>
  <main class="container">
    <h1>Categorias</h1>

    <ul>
      <li>
        <span><fa icon="chevron-right" /></span>Todas
      </li>
      <li>
        <span><fa icon="chevron-right" /></span>Urgentes
      </li>
      <li>
        <span><fa icon="chevron-right" /></span>Importantes
      </li>
      <li>
        <span><fa icon="chevron-right" /></span>Outras
      </li>
      <li>
        <span><fa icon="chevron-right" /></span>Finalizadas
      </li>
    </ul>
  </main>
</template>
<script>
export default {}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 250px 0;
  height: 100%;
  background-color: #f4fbff;
  width: 250px;
  border-right: rgba(0, 0, 0, 0.05) 2px solid;
  gap: 40px;

  h1 {
    font-size: 18px;
    color: #4e5f70;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
  }

  li {
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: 700;

    span {
      font-size: 10px;
    }
  }
}

@media (max-width: 800px) {
  .container {
    display: none;
  }
}
</style>
