<template>
  <main class="content">
    <div class="header">
      <div class="title">
        <h1 class="title">Minhas Tarefas</h1>
        <p class="sub-title">
          Olá <span>Eduardo Pereira</span>, você tem
          <span style="text-decoration: underline">4 tarefas</span> pendentes.
        </p>
      </div>
      <div class="search">
        <input type="text" placeholder="Buscar Tarefas" />
        <button type="button">
          <fa icon="magnifying-glass" />
        </button>
      </div>
    </div>

    <ListComponent />

    <button @click="toggleModal" type="button" class="add-task"><fa icon="plus" /></button>
  </main>

  <TaskForm modalActive="modalActive" @close="toggleModal" />
</template>
<script>
import { ref } from 'vue'
import TaskForm from './TaskForm/TaskForm.vue'
import ListComponent from './ListComponent/ListComponent.vue'

export default {
  name: 'TaskScreen',
  components: { TaskForm, ListComponent },
  setup() {
    const modalActive = ref(false)

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    return { modalActive, toggleModal }
  }
}
</script>
<style scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-color: #e9f4fb;
}
.header {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 300px;
  gap: 30px;
  align-items: center;
  justify-content: center;

  .title {
    width: 100%;
  }

  .sub-title {
    color: #7e8fa4;

    span {
      font-weight: 700;
      color: #5797d6;
    }
  }

  .search {
    display: flex;
    justify-content: space-between;
    border: 2px solid #bfdaeb;
    width: 100%;
    height: 50px;
    border-radius: 8px;

    input {
      padding: 0 10px;
      width: 100%;
      font-size: 18px;
      height: 100%;
      border: none;
      background-color: #e9f4fb;
      border-radius: 8px;
    }

    input::placeholder {
      color: #99b2c2;
    }
    input:focus {
      outline: none;
    }

    button {
      font-size: 20px;
      background-color: transparent;
      border: none;
      width: 50px;
      color: #bfdaeb;
      cursor: pointer;
    }

    button:active {
      color: #dbebf5;
    }
  }
}

.add-task {
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 35px;
  border-radius: 100%;
  width: 80px;
  height: 80px;

  border: none;
  background-color: #74d38f;
  color: #ffffff;
}
</style>
