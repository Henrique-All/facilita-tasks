<template>
  <div v-show="modalActive" class="modal">
    <div class="modal-inner" v-show="modalActive">
      <fa @click="closeModal" icon="xmark" class="close-modal" />
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: ['modalActive'],

  setup(props, { emit }) {
    const closeModal = () => {
      emit('close')
    }

    return { closeModal }
  }
}
</script>
<style scoped>
.modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}

.modal-inner {
  position: relative;
  width: 30%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;

  .close-modal {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 12px;
    cursor: pointer;
  }
}
</style>
