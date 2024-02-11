<template>
  <div>
    <div class="container" v-for="(task, index) in tasks" :key="index">
      <div class="title">
        <div class="tasks">
          <input type="checkbox" id="checked" />
          <label for="checked"></label>
          <p>{{ task.object }}</p>
          <p>{{ task.description }}</p>
          <p v-if="task.urgent">Urgente</p>
          <p v-if="task.important">Importante</p>
          <!-- Assuming `fa` is a custom component -->
          <fa icon="ellipsis-vertical" />
        </div>
        <div class="text">
          <button type="button" @click="openEditModal(index)">editar</button>
          <button type="button" @click="removeTask(index)">excluir</button>
        </div>
      </div>
    </div>
    <!-- ModalComponent -->
    <ModalComponent :modalActive="modalActive" @close="toggleModal()">
      <div class="icon-trash"><fa icon="trash-can" /></div>
      <div class="description">
        <p>Tem certeza que deseja <span style="color: red">excluir</span> esta tarefa?</p>
        <p>Esta ação não poderá ser desfeita.</p>
      </div>
      <div class="btn">
        <button type="button" @click="toggleModal()" class="btn-cancel">Cancelar</button>
        <button type="button" @click="deleteTask()" class="btn-cancel">Confirmar</button>
      </div>
    </ModalComponent>

    <!-- Edit ModalComponent -->
    <ModalComponent :modalActive="editModalActive" @close="toggleEditModal()">
      <div class="edit-task-modal">
        <h2>Editar Tarefa</h2>
        <input type="text" v-model="editedTask.object" />
        <input type="text" v-model="editedTask.description" />
        <button @click="saveEditedTask">Salvar</button>
      </div>
      <div>
        <input type="checkbox" id="urgent-checkbox" v-model="editedTask.urgent" />
        <label for="urgent-checkbox">Urgente</label>
      </div>
      <div>
        <input type="checkbox" id="important-checkbox" v-model="editedTask.important" />
        <label for="important-checkbox">Importante</label>
      </div>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from '@/components/ModalComponent/ModalComponent.vue'
import { ref } from 'vue'

export default {
  components: { ModalComponent },
  setup() {
    const modalActive = ref(false)
    const editModalActive = ref(false)
    const tasks = ref([])

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    const toggleEditModal = () => {
      editModalActive.value = !editModalActive.value
    }

    const openEditModal = (index) => {
      editedTask.value = { ...tasks.value[index] } // Copiar a tarefa para evitar a mutação direta
      editedTaskIndex.value = index
      toggleEditModal()
    }

    const removeTask = (index) => {
      toggleModal()
      taskToRemove.value = index
    }

    const deleteTask = () => {
      tasks.value.splice(taskToRemove.value, 1)
      localStorage.setItem('task', JSON.stringify(tasks.value))
      console.log('Dados removidos:', tasks.value)
      toggleModal()
    }

    const saveEditedTask = () => {
      tasks.value.splice(editedTaskIndex.value, 1, editedTask.value) // Substituir a tarefa editada pela nova tarefa
      localStorage.setItem('task', JSON.stringify(tasks.value))
      toggleEditModal()
    }

    const fetchTasks = () => {
      tasks.value = JSON.parse(localStorage.getItem('task')) || []
      console.log('Dados recuperados:', tasks.value)
    }

    fetchTasks()

    const taskToRemove = ref(null)
    const editedTask = ref({}) // Inicializar com um objeto vazio
    const editedTaskIndex = ref(null)

    return {
      modalActive,
      toggleModal,
      editModalActive,
      toggleEditModal,
      tasks,
      removeTask,
      deleteTask,
      openEditModal,
      editedTask,
      saveEditedTask,
      editedTaskIndex
    }
  }
}
</script>
