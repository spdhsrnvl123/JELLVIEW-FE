<template>
  <div class="modalContainer" v-if="modalStatus == true">
    <div class="modalSection">
      <button @click="$emit('closeModal')" class="closeModal">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
  props : {
    modalStatus : Boolean
  }
}
</script>

<style>
.modalContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
}
.modalSection {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 65%;
  background: #f7fef7;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
}
.closeModal{
    position: absolute;
    top:2%;
    right:6%;
    width: 30px;
    font-size: 51px;
    font-weight: 300;
    border: 0;
    cursor: pointer;
    background-color: transparent;
}
</style>
