<template>
  <ModalComponent>
    <form action="#" class="create-task">
      <h1>Cadastrar Tarefa</h1>

      <div class="title">
        <p>Titulo:</p>
        <input type="text" v-model="form.object" required autocomplete="off" />
      </div>

      <div class="description">
        <p>Descrição</p>
        <textarea class="text-area" rows="5" v-model="form.description"></textarea>
      </div>

      <div class="footer-task">
        <div>
          <div class="checkbox-circle">
            <input type="checkbox" id="checkbox" name="check" v-model="form.urgent" />
            <label for="checkbox">Urgente</label>
          </div>
          <div class="checkbox-circle">
            <input type="checkbox" id="checkbox2" name="check" v-model="form.important" />
            <label for="checkbox2">Importante</label>
          </div>
        </div>
        <button type="button" @click="createTask()" class="new-task">Adicionar</button>
      </div>
    </form>
  </ModalComponent>
</template>

<script>
import ModalComponent from '../../../../components/ModalComponent/ModalComponent.vue'

export default {
  name: 'FromComponent',
  components: { ModalComponent },

  data() {
    return {
      form: {
        object: '',
        description: '',
        urgent: false,
        important: false
      }
    }
  },

  // Logica da parte de criação de tasks
  methods: {
    createTask() {
      // Validação das informações
      if (!this.form.object.trim()) {
        alert('Por favor, insira um título para a tarefa.')
        return
      }

      // Selecionar e filtrar rota
      let tasks = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : []
      // Subir rota no localStorage
      tasks.push(this.form)
      localStorage.setItem('task', JSON.stringify(tasks))
      // Reload na pagina
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.create-task {
  display: flex;
  flex-direction: column;
  height: 400px;
  gap: 20px;
  margin-top: 10px;
}

.title {
  width: 100%;
}

input[type='text'] {
  width: 100%;
  border: 2px solid #b3cbdb;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
}

input[type='text']:focus {
  outline-color: #2693ff;
}
.text-area {
  width: 100%;
  resize: none;
  border: 2px solid #b3cbdb;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  height: 150px;
}

.text-area:focus {
  outline-color: #2693ff;
}

.footer-task {
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .checkbox-circle input[type='checkbox'] {
    display: none;
  }
  .checkbox-circle input[type='checkbox'] + label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 20px;
    font:
      14px/20px 'Open Sans',
      Arial,
      sans-serif;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  .checkbox-circle input[type='checkbox'] + label:last-child {
    margin-bottom: 0;
  }

  .checkbox-circle input[type='checkbox'] + label:before {
    content: '';
    display: block;
    width: 1em;
    height: 1em;
    border: 1px solid #2693ff;
    border-radius: 1em;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition:
      all 0.2s,
      transform 0.3s ease-in-out;
    transition:
      all 0.2s,
      transform 0.3s ease-in-out;
    background: #f3f3f3;
  }

  .checkbox-circle input[type='checkbox']:checked + label:before {
    border-radius: 1em;
    border: 2px solid #fff;
    background: #2693ff;
    box-shadow: 0 0 0 1px #2693ff;
  }

  .checkbox-circle input[type='checkbox'] {
    display: none;
  }

  .checkbox-circle input[type='checkbox'] + label {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 20px;
    font:
      14px/20px 'Open Sans',
      Arial,
      sans-serif;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  .checkbox-circle input[type='checkbox'] {
    display: none;
  }
  .checkbox-circle input[type='checkbox'] + label {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 20px;
    font:
      14px/20px 'Open Sans',
      Arial,
      sans-serif;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
}

.new-task {
  background-color: #1ad18f;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 15px;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
}
</style>
