<template>
  <!-- Parte de busca e informações -->
  <div class="main">
    <div class="header">
      <div class="title">
        <h1 class="title">Minhas Tarefas</h1>
        <p class="sub-title">
          Olá <span>Eduardo Pereira</span>, você tem
          <span style="text-decoration: underline">{{ tasks.length }} tarefas</span> pendentes.
        </p>
      </div>
      <div class="search">
        <input type="text" placeholder="Buscar Tarefas" v-model="searchText" />
        <button type="button" @click="searchTasks">
          <fa icon="magnifying-glass" />
        </button>
      </div>
    </div>

    <!-- Cards de tarefas -->
    <div class="tasksgrup">
      <div class="container-list" v-for="(task, index) in filteredTasks" :key="index">
        <div
          class="tasks"
          :style="{
            color: task.checked ? '#9FABB7' : 'inherit',
            backgroundColor: task.checked ? '#F4FAFD' : '#ffffff'
          }"
        >
          <div class="left-content">
            <input type="checkbox" id="checked" v-model="task.checked" class="ckeckbox" />
            <p
              :style="{
                'text-decoration': task.checked ? 'line-through' : 'none'
              }"
            >
              {{ task.object }}
            </p>
          </div>
          <div class="right-content">
            <p v-if="task.urgent" class="alert">Urgente</p>
            <p v-if="task.important" class="pre-order">Importante</p>

            <button type="button" @click="toggleTaskOptions(index)" class="show-options">
              <fa icon="ellipsis-vertical" />
            </button>
            <div class="option" v-show="showTaskOptions && activeTaskIndex === index">
              <button type="button" @click="openEditModal(index)" class="edit">
                <span></span>Editar
              </button>
              <button type="button" @click="removeTask(index)" class="delete">
                <span></span>Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ModalComponent -->
    <ModalComponent :modalActive="modalActive" @close="toggleModal()" class="modal">
      <div class="container-modal-delete">
        <div class="icon-trash"><fa icon="trash-can" /></div>
        <div class="description">
          <p>Tem certeza que deseja <span style="color: red">excluir</span> esta tarefa?</p>
          <p>Esta ação não poderá ser desfeita.</p>
        </div>
        <div class="btn">
          <button type="button" @click="toggleModal()" class="btn-cancel">Cancelar</button>
          <button type="button" @click="deleteTask()" class="btn-confirm">Confirmar</button>
        </div>
      </div>
    </ModalComponent>
    <!-- Modal para editar o conteudo -->
    <ModalComponent :modalActive="editModalActive" @close="toggleEditModal()">
      <div class="edit-task-modal">
        <h2>Editar Tarefa</h2>
        <div class="title">
          <p>Titulo:</p>
          <input type="text" required autocomplete="off" v-model="editedTask.object" />
        </div>
        <div class="description-edit">
          <p>Descrição</p>
          <textarea class="text-area" rows="5" v-model="editedTask.description"></textarea>
        </div>
        <div class="footer-task">
          <div>
            <div class="checkbox-circle">
              <input
                type="checkbox"
                id="checkbox-circle"
                name="check"
                v-model="editedTask.urgent"
              />
              <label for="checkbox-circle">Urgente</label>
            </div>
            <div class="checkbox-circle">
              <input
                type="checkbox"
                id="checkbox-circle2"
                name="check"
                v-model="editedTask.important"
              />
              <label for="checkbox-circle2">Importante</label>
            </div>
          </div>
          <button @click="saveEditedTask" class="save-task">Salvar</button>
        </div>
      </div>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from '@/components/ModalComponent/ModalComponent.vue'
import { ref, computed } from 'vue'

export default {
  components: { ModalComponent },
  setup() {
    const modalActive = ref(false)
    const editModalActive = ref(false)
    const activeTaskIndex = ref(null)
    const showTaskOptions = ref(false)
    const searchText = ref('')
    const tasks = ref([])

    // Filtro das task
    const filteredTasks = computed(() => {
      const searchTerm = searchText.value.toLowerCase()
      return tasks.value.filter((task) => {
        return task.object.toLowerCase().includes(searchTerm)
      })
    })

    // Abrir e fachar modal
    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    // Trocar estilo das task
    const toggleTaskStyle = (task) => {
      task.checked = !task.checked // alternar o estado da tarefa
    }

    // Logica do modal de dição
    const toggleEditModal = () => {
      editModalActive.value = !editModalActive.value
    }

    const openEditModal = (index) => {
      editedTask.value = { ...tasks.value[index] }
      editedTaskIndex.value = index
      toggleEditModal()
    }

    // Deletar tarefa
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

    const toggleTaskOptions = (index) => {
      activeTaskIndex.value = index
      showTaskOptions.value = !showTaskOptions.value
    }

    const handleClickOutside = (event) => {
      if (!event.target.closest('.text') && !event.target.closest('.tasks')) {
        showTaskOptions.value = false
      }
    }

    window.addEventListener('click', handleClickOutside)

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
      editedTaskIndex,
      toggleTaskStyle,
      activeTaskIndex,
      showTaskOptions,
      toggleTaskOptions,
      searchText,
      filteredTasks
    }
  }
}
</script>

<style scoped src="./css/ModalsStyles.css"></style>
<style scoped src="./css/ListStyles.css"></style>
