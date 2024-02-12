<template>
  <main class="content">
    <ListComponent />

    <button @click="toggleModal()" type="button" class="add-task"><fa icon="plus" /></button>
  </main>

  <CreateTask :modalActive="modalActive" @close="toggleModal" />
</template>
<script>
import { ref } from 'vue'
import CreateTask from './CreateTask/CreateTask.vue'
import ListComponent from './ListComponent/ListComponent.vue'

export default {
  name: 'TaskScreen',
  components: { CreateTask, ListComponent },
  setup() {
    const modalActive = ref(false)

    const toggleModal = () => {
      console.log(modalActive.value)
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
  height: 100%;
  background-color: #e9f4fb;
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

@media (max-width: 800px) {
  .add-task {
    bottom: 90px;
    width: 60px;
    height: 60px;
    font-size: 25px;
  }
}
</style>
